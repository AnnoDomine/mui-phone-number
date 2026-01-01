import {
  debounce,
  filter,
  find,
  findIndex,
  head,
  includes,
  isString,
  reduce,
  some,
  startsWith,
  tail,
  trim,
} from 'lodash';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import countryData, { type Country } from '../../country_data';
import type { MuiPhoneNumberProps } from './MuiPhoneNumber.types';

// -- Pure Helper Functions --

const guessSelectedCountry = (
  inputNumber: string,
  onlyCountries: Country[],
  defaultCountryIso: string,
) => {
  const secondBestGuess =
    find(onlyCountries, { iso2: defaultCountryIso }) || ({} as Country);
  if (trim(inputNumber) === '') return secondBestGuess;

  const bestGuess = reduce(
    onlyCountries,
    (selectedCountry, country) => {
      if (startsWith(inputNumber, country.dialCode)) {
        if (country.dialCode.length > selectedCountry.dialCode.length) {
          return country;
        }
        if (
          country.dialCode.length === selectedCountry.dialCode.length &&
          country.priority < selectedCountry.priority
        ) {
          return country;
        }
      }
      return selectedCountry;
    },
    { dialCode: '', priority: 10001 } as Country,
  );

  if (!bestGuess.name) return secondBestGuess;
  return bestGuess;
};

export const useMuiPhoneNumber = (props: MuiPhoneNumberProps) => {
  const {
    autoFormat = true,
    countryCodeEditable = true,
    defaultCountry = '',
    disableAreaCodes = false,
    disableCountryCode = false,
    enableLongNumbers = false,
    excludeCountries = [],
    isModernBrowser = () =>
      document.createElement
        ? Boolean(document.createElement('input').setSelectionRange)
        : false,
    keys = {
      UP: 38,
      DOWN: 40,
      RIGHT: 39,
      LEFT: 37,
      ENTER: 13,
      ESC: 27,
      PLUS: 43,
      A: 65,
      Z: 90,
      SPACE: 32,
    },
    onlyCountries = [],
    onChange,
    onEnterKeyPress,
    onKeyDown,
    onBlur,
    onFocus,
    onClick,
    placeholder = '+1 (702) 123-4567',
    preferredCountries = [],
    regions = '',
    isValid = (inputNumber: string) =>
      some(
        countryData.allCountries,
        (country) =>
          startsWith(inputNumber, country.dialCode) ||
          startsWith(country.dialCode, inputNumber),
      ),
    value = '',
  } = props;

  const flagsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const inputRef = useRef<HTMLInputElement | null>(null);

  // -- Memoized Data Transformers --

  const computedOnlyCountries = useMemo(() => {
    let filteredCountries = countryData.allCountries;

    const deleteAreaCodes = (countries: Country[]) =>
      countries.filter((country) => country.isAreaCode !== true);

    const filterRegions = (
      regionsArg: string | string[],
      countries: Country[],
    ) => {
      if (typeof regionsArg === 'string') {
        const region = regionsArg;
        return countries.filter((country) =>
          country.regions.some((element) => element === region),
        );
      }
      return countries.filter((country) => {
        const matches = regionsArg.map((region) =>
          country.regions.some((element) => element === region),
        );
        return matches.some((el) => el);
      });
    };

    const getOnlyCountriesFunc = (
      onlyCountriesArray: string[],
      countries: Country[],
    ) => {
      if (onlyCountriesArray.length === 0) return countries;
      return countries.filter((country) =>
        onlyCountriesArray.some((element) => element === country.iso2),
      );
    };

    const excludeCountriesFunc = (
      selectedCountries: Country[],
      excludedCountriesArray: string[],
    ) => {
      if (excludedCountriesArray.length === 0) return selectedCountries;
      return filter(
        selectedCountries,
        (selCountry) => !includes(excludedCountriesArray, selCountry.iso2),
      );
    };

    if (disableAreaCodes) filteredCountries = deleteAreaCodes(filteredCountries);
    if (regions) filteredCountries = filterRegions(regions, filteredCountries);

    return excludeCountriesFunc(
      getOnlyCountriesFunc(onlyCountries, filteredCountries),
      excludeCountries,
    );
  }, [disableAreaCodes, regions, onlyCountries, excludeCountries]);

  const computedPreferredCountries = useMemo(() => {
    return filter(countryData.allCountries, (country) =>
      some(
        preferredCountries,
        (preferredCountry) => preferredCountry === country.iso2,
      ),
    );
  }, [preferredCountries]);

  // -- Helpers --

  const formatNumber = useCallback(
    (text: string, patternArg?: string) => {
      let pattern: string | undefined = '';
      if (disableCountryCode && patternArg) {
        pattern = patternArg.split(' ').slice(1).join(' ');
      } else {
        pattern = patternArg;
      }

      if (!text || text.length === 0) {
        return disableCountryCode ? '' : '+';
      }

      if ((text && text.length < 2) || !pattern || !autoFormat) {
        return disableCountryCode ? text : `+${text}`;
      }

      const formattedObject = reduce(
        pattern,
        (
          acc: { formattedText: string; remainingText: string[] },
          character: string,
        ) => {
          if (acc.remainingText.length === 0) {
            return acc;
          }

          if (character !== '.') {
            return {
              formattedText: acc.formattedText + character,
              remainingText: acc.remainingText,
            };
          }

          return {
            formattedText: acc.formattedText + head(acc.remainingText),
            remainingText: tail(acc.remainingText),
          };
        },
        {
          formattedText: '',
          remainingText: text.split(''),
        },
      );

      let formattedNumber = '';
      if (enableLongNumbers) {
        formattedNumber =
          formattedObject.formattedText +
          formattedObject.remainingText.join('');
      } else {
        formattedNumber = formattedObject.formattedText;
      }

      if (formattedNumber.includes('(') && !formattedNumber.includes(')'))
        formattedNumber += ')';
      return formattedNumber;
    },
    [disableCountryCode, autoFormat, enableLongNumbers],
  );

  // -- State Initialization --

  const [state, setState] = useState(() => {
    const inputNum = (value as string) || '';
    let countryGuess: Country | undefined;

    if (inputNum.length > 1) {
      countryGuess =
        guessSelectedCountry(
          inputNum.replace(/\D/g, '').substring(0, 6),
          computedOnlyCountries,
          defaultCountry,
        ) || ({} as Country);
    } else if (defaultCountry) {
      countryGuess = find(computedOnlyCountries, { iso2: defaultCountry });
    }

    if (!countryGuess || !countryGuess.dialCode) {
      countryGuess = { dialCode: '', priority: 10001 } as Country;
    }

    const dialCode =
      inputNum.length < 2 &&
      countryGuess &&
      countryGuess.dialCode &&
      !startsWith(inputNum.replace(/\D/g, ''), countryGuess.dialCode)
        ? countryGuess.dialCode
        : '';

    const formattedNumber =
      inputNum === '' && (!countryGuess || !countryGuess.name)
        ? ''
        : formatNumber(
            (disableCountryCode ? '' : dialCode) + inputNum.replace(/\D/g, ''),
            countryGuess.name ? countryGuess.format : undefined,
          );

    return {
      formattedNumber,
      placeholder: placeholder || '',
      selectedCountry: countryGuess,
      highlightCountryIndex: 0,
      queryString: '',
      freezeSelection: false,
      anchorEl: null as HTMLElement | null,
    };
  });

  // -- Effects --

  // Update when defaultCountry changes
  useEffect(() => {
    if (defaultCountry && defaultCountry !== state.selectedCountry.iso2) {
      const newSelectedCountry =
        find(computedOnlyCountries, { iso2: defaultCountry }) ||
        ({} as Country);
      setState((prev) => ({
        ...prev,
        selectedCountry: newSelectedCountry,
        formattedNumber: disableCountryCode
          ? ''
          : `+${newSelectedCountry.dialCode}`,
      }));
    }
  }, [defaultCountry, computedOnlyCountries, disableCountryCode, state.selectedCountry.iso2]);

  // Update when value changes
  useEffect(() => {
    if (value !== state.formattedNumber) {
      const inputNum = (value as string) || '';
      let countryGuess: Country | undefined;
      let newFormattedNumber = inputNum;

      if (!inputNum.startsWith('+')) {
        countryGuess = find(computedOnlyCountries, { iso2: defaultCountry });
        const dialCode =
          countryGuess &&
          !startsWith(inputNum.replace(/\D/g, ''), countryGuess.dialCode)
            ? countryGuess.dialCode
            : '';
        newFormattedNumber = formatNumber(
          (disableCountryCode ? '' : dialCode) + inputNum.replace(/\D/g, ''),
          countryGuess ? countryGuess.format : undefined,
        );
      } else {
        const cleanInputNum = inputNum.replace(/\D/g, '');
        countryGuess = guessSelectedCountry(
          cleanInputNum.substring(0, 6),
          computedOnlyCountries,
          defaultCountry,
        ) as Country;
        newFormattedNumber = formatNumber(cleanInputNum, countryGuess.format);
      }

      if (countryGuess) {
        setState((prev) => ({
          ...prev,
          selectedCountry: countryGuess!,
          formattedNumber: newFormattedNumber,
        }));
      }
    }
  }, [value, defaultCountry, computedOnlyCountries, disableCountryCode, formatNumber, state.formattedNumber]);

  // -- Handlers --

  const getCountryData = (selectedCountry: Country) => {
    if (!selectedCountry) return {} as Country;
    return {
      name: selectedCountry.name || '',
      dialCode: selectedCountry.dialCode || '',
      countryCode: selectedCountry.iso2 || '',
    } as unknown as Country;
  };

  const cursorToEnd = useCallback(() => {
    const input = inputRef.current;
    if (input) {
      input.focus();
      if (isModernBrowser && isModernBrowser()) {
        const len = input.value.length;
        input.setSelectionRange(len, len);
      }
    }
  }, [isModernBrowser]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let { selectedCountry, freezeSelection } = state;
      let newSelectedCountry = selectedCountry;
      let newFormattedNumber = disableCountryCode ? '' : '+';

      if (!countryCodeEditable) {
        const updatedInput = `+${newSelectedCountry.dialCode}`;
        if (e.target.value.length < updatedInput.length) {
          return;
        }
      }

      if (e.target.value.replace(/\D/g, '').length > 15) {
        return;
      }

      if (e.target.value === state.formattedNumber) {
        return;
      }

      if (e.target.value.length > 0) {
        const inputNumber = e.target.value.replace(/\D/g, '');
        if (
          !freezeSelection ||
          selectedCountry.dialCode.length > inputNumber.length
        ) {
          newSelectedCountry = guessSelectedCountry(
            inputNumber.substring(0, 6),
            computedOnlyCountries,
            defaultCountry,
          ) as Country;
          freezeSelection = false;
        }
        newFormattedNumber = formatNumber(inputNumber, newSelectedCountry.format);
      }

      let caretPosition = e.target.selectionStart || 0;
      const diff = newFormattedNumber.length - state.formattedNumber.length;

      setState((prev) => ({
        ...prev,
        formattedNumber: newFormattedNumber,
        freezeSelection,
        selectedCountry: newSelectedCountry.dialCode ? newSelectedCountry : selectedCountry,
      }));

      if (isModernBrowser && isModernBrowser()) {
        requestAnimationFrame(() => {
          const input = inputRef.current;
          if (!input) return;

          if (diff > 0) {
            caretPosition -= diff;
          }

          const lastChar = newFormattedNumber.charAt(newFormattedNumber.length - 1);
          if (lastChar === ')') {
            input.setSelectionRange(
              newFormattedNumber.length - 1,
              newFormattedNumber.length - 1,
            );
          } else if (
            caretPosition > 0 &&
            state.formattedNumber.length >= newFormattedNumber.length
          ) {
            input.setSelectionRange(caretPosition, caretPosition);
          }
        });
      }

      if (onChange) {
        onChange(newFormattedNumber, getCountryData(newSelectedCountry));
      }
    },
    [
      state,
      countryCodeEditable,
      disableCountryCode,
      computedOnlyCountries,
      defaultCountry,
      formatNumber,
      isModernBrowser,
      onChange,
    ],
  );

  const handleFlagItemClick = useCallback(
    (country: string | Country) => {
      const currentSelectedCountry = state.selectedCountry;
      const nextSelectedCountry = isString(country)
        ? find(computedOnlyCountries, (countryItem) => countryItem.iso2 === country)
        : find(computedOnlyCountries, country);

      if (!nextSelectedCountry) return;

      const unformattedNumber = state.formattedNumber
        .replace(' ', '')
        .replace('(', '')
        .replace(')', '')
        .replace('-', '');
      const newNumber =
        unformattedNumber.length > 1
          ? unformattedNumber.replace(
              currentSelectedCountry.dialCode,
              nextSelectedCountry.dialCode,
            )
          : nextSelectedCountry.dialCode;

      const newFormattedNumber = formatNumber(
        newNumber.replace(/\D/g, ''),
        nextSelectedCountry.format,
      );

      setState((prev) => ({
        ...prev,
        anchorEl: null,
        selectedCountry: nextSelectedCountry,
        freezeSelection: true,
        formattedNumber: newFormattedNumber,
      }));

      setTimeout(() => cursorToEnd(), 0);

      if (onChange) {
        onChange(newFormattedNumber, getCountryData(nextSelectedCountry));
      }
    },
    [
      state.selectedCountry,
      state.formattedNumber,
      computedOnlyCountries,
      formatNumber,
      onChange,
      cursorToEnd,
    ],
  );

  const handleInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (inputRef.current) {
        if (
          inputRef.current.value === '+' &&
          state.selectedCountry &&
          !disableCountryCode
        ) {
          const newFormatted = `+${state.selectedCountry.dialCode}`;
          setState((prev) => ({ ...prev, formattedNumber: newFormatted }));
          setTimeout(() => cursorToEnd(), 10);
        }
      }

      setState((prev) => ({ ...prev, placeholder: '' }));

      if (onFocus) {
        onFocus(e, getCountryData(state.selectedCountry));
      }

      setTimeout(() => cursorToEnd(), 10);
    },
    [
      state.selectedCountry,
      disableCountryCode,
      onFocus,
      cursorToEnd,
    ],
  );

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!e.target.value) {
        setState((prev) => ({ ...prev, placeholder: placeholder || '' }));
      }
      if (onBlur) {
        onBlur(e, getCountryData(state.selectedCountry));
      }
    },
    [placeholder, onBlur, state.selectedCountry],
  );

  const handleInputClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(e, getCountryData(state.selectedCountry));
      }
    },
    [onClick, state.selectedCountry],
  );

  // -- Dropdown Utils --

  const scrollTo = useCallback((country: HTMLElement | null) => {
    if (!country || !country.parentElement) return;
    country.parentElement.scrollTop = country.offsetTop;
  }, []);

  const searchCountry = useCallback(() => {
    const getProbableCandidate = (queryString: string) => {
        if (!queryString || queryString.length === 0) return null;
        return filter(
            computedOnlyCountries,
            (country) =>
              startsWith(country.name.toLowerCase(), queryString.toLowerCase()),
          )[0];
    };

    const probableCandidate =
      getProbableCandidate(state.queryString) || computedOnlyCountries[0];
    const probableCandidateIndex =
      findIndex(computedOnlyCountries, probableCandidate) +
      computedPreferredCountries.length;

    const element = flagsRef.current[`flag_no_${probableCandidateIndex}`];
    scrollTo(element);

    setState((prev) => ({
      ...prev,
      queryString: '',
      highlightCountryIndex: probableCandidateIndex,
    }));
  }, [state.queryString, computedOnlyCountries, computedPreferredCountries, scrollTo]);

  const debouncedSearchCountry = useMemo(
    () => debounce(searchCountry, 100),
    [searchCountry],
  );

  const handleKeydown = useCallback(
    (e: any) => {
      if (!state.anchorEl || props.disabled || !keys) return;

      if (e.preventDefault) e.preventDefault();

      const moveHighlight = (direction: number) => {
        const totalCount =
          computedOnlyCountries.length + computedPreferredCountries.length;
        let newIndex = state.highlightCountryIndex + direction;

        if (newIndex < 0 || newIndex >= totalCount) {
          newIndex -= direction;
        }

        setState((prev) => ({ ...prev, highlightCountryIndex: newIndex }));
        const element = flagsRef.current[`flag_no_${newIndex}`];
        scrollTo(element);
      };

      switch (e.which) {
        case keys.DOWN:
          moveHighlight(1);
          break;
        case keys.UP:
          moveHighlight(-1);
          break;
        case keys.ENTER: {
          const allItems = [
            ...computedPreferredCountries,
            ...computedOnlyCountries,
          ];
          const selected = allItems[state.highlightCountryIndex];
          if (selected) handleFlagItemClick(selected);
          break;
        }
        case keys.ESC:
          setState((prev) => ({ ...prev, anchorEl: null }));
          cursorToEnd();
          break;
        default:
          if (
            (e.which >= keys.A && e.which <= keys.Z) ||
            e.which === keys.SPACE
          ) {
            setState((prev) => ({
              ...prev,
              queryString: prev.queryString + String.fromCharCode(e.which),
            }));
            debouncedSearchCountry();
          }
      }
    },
    [
      state.anchorEl,
      state.highlightCountryIndex,
      props.disabled,
      keys,
      computedOnlyCountries,
      computedPreferredCountries,
      handleFlagItemClick,
      cursorToEnd,
      debouncedSearchCountry,
      scrollTo,
    ],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  const handleRefInput = useCallback(
    (ref: HTMLInputElement) => {
      inputRef.current = ref;
      if (props.inputRef) {
        if (typeof props.inputRef === 'function') props.inputRef(ref);
        else (props.inputRef as any).current = ref;
      }
    },
    [props.inputRef],
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (keys && e.which === keys.ENTER && onEnterKeyPress) {
        onEnterKeyPress(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [keys, onEnterKeyPress, onKeyDown],
  );

  return {
    state,
    setState,
    flagsRef,
    inputRef,
    handleInput,
    handleInputClick,
    handleInputFocus,
    handleInputBlur,
    handleKeydown,
    handleInputKeyDown,
    handleRefInput,
    handleFlagItemClick,
    computedOnlyCountries,
    computedPreferredCountries,
    isValid: () => isValid(state.formattedNumber.replace(/\D/g, '')),
  };
};
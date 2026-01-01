import debounce from 'lodash/debounce';
import filter from 'lodash/filter';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import head from 'lodash/head';
import includes from 'lodash/includes';
import isString from 'lodash/isString';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import startsWith from 'lodash/startsWith';
import tail from 'lodash/tail';
import trim from 'lodash/trim';
import type React from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
    onlyCountries: propsOnlyCountries = [],
    onChange,
    onEnterKeyPress,
    onKeyDown,
    onBlur,
    onFocus,
    onClick,
    placeholder: propsPlaceholder = '+1 (702) 123-4567',
    preferredCountries: propsPreferredCountries = [],
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

    if (disableAreaCodes)
      filteredCountries = deleteAreaCodes(filteredCountries);
    if (regions) filteredCountries = filterRegions(regions, filteredCountries);

    return excludeCountriesFunc(
      getOnlyCountriesFunc(propsOnlyCountries, filteredCountries),
      excludeCountries,
    );
  }, [disableAreaCodes, regions, propsOnlyCountries, excludeCountries]);

  const computedPreferredCountries = useMemo(() => {
    return filter(countryData.allCountries, (country) =>
      some(
        propsPreferredCountries,
        (preferredCountry) => preferredCountry === country.iso2,
      ),
    );
  }, [propsPreferredCountries]);

  // -- Helpers (Pure Logic) --

  const formatDisplayedNumber = useCallback(
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

      let localFormattedNumber = '';
      if (enableLongNumbers) {
        localFormattedNumber =
          formattedObject.formattedText +
          formattedObject.remainingText.join('');
      } else {
        localFormattedNumber = formattedObject.formattedText;
      }

      if (
        localFormattedNumber.includes('(') &&
        !localFormattedNumber.includes(')')
      )
        localFormattedNumber += ')';
      return localFormattedNumber;
    },
    [disableCountryCode, autoFormat, enableLongNumbers],
  );

  // -- Internal State (for UI focus, dropdown, etc. - not primary value) --

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [highlightCountryIndex, setHighlightCountryIndex] = useState(0);
  const [queryString, setQueryString] = useState('');
  const [freezeSelection, setFreezeSelection] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] =
    useState(propsPlaceholder);

  // -- Derived State (from props and internal UI state) --

  const selectedCountry = useMemo(() => {
    const inputNum = (value as string) || '';
    let country: Country | undefined;

    if (inputNum.length > 1) {
      country =
        guessSelectedCountry(
          inputNum.replace(/\D/g, '').substring(0, 6),
          computedOnlyCountries,
          defaultCountry,
        ) || ({} as Country);
    } else if (defaultCountry) {
      country = find(computedOnlyCountries, { iso2: defaultCountry });
    }

    if (!country || !country.dialCode) {
      country = { dialCode: '', priority: 10001 } as Country;
    }
    return country;
  }, [value, computedOnlyCountries, defaultCountry]);

  const formattedNumber = useMemo(() => {
    const inputNum = (value as string) || '';
    const dialCode =
      inputNum.length < 2 &&
      selectedCountry &&
      selectedCountry.dialCode &&
      !startsWith(inputNum.replace(/\D/g, ''), selectedCountry.dialCode)
        ? selectedCountry.dialCode
        : '';

    return inputNum === '' && (!selectedCountry || !selectedCountry.name)
      ? ''
      : formatDisplayedNumber(
          (disableCountryCode ? '' : dialCode) + inputNum.replace(/\D/g, ''),
          selectedCountry.name ? selectedCountry.format : undefined,
        );
  }, [value, selectedCountry, disableCountryCode, formatDisplayedNumber]);

  // -- Handlers --

  const getCountryData = useCallback((country: Country) => {
    if (!country) return {} as Country;
    return {
      name: country.name || '',
      dialCode: country.dialCode || '',
      countryCode: country.iso2 || '',
    } as unknown as Country;
  }, []);

  const cursorToEnd = useCallback(() => {
    const input = inputRef.current;
    if (input) {
      input.focus();
      if (isModernBrowser?.()) {
        const len = input.value.length;
        input.setSelectionRange(len, len);
      }
    }
  }, [isModernBrowser]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let currentSelectedCountry = selectedCountry;

      let newFormattedNumber = disableCountryCode ? '' : '+';

      if (!countryCodeEditable) {
        const updatedInput = `+${currentSelectedCountry.dialCode}`;
        if (e.target.value.length < updatedInput.length) {
          return;
        }
      }

      if (e.target.value.replace(/\D/g, '').length > 15) {
        return;
      }

      if (e.target.value === formattedNumber) {
        return;
      }

      if (e.target.value.length > 0) {
        const inputNumber = e.target.value.replace(/\D/g, '');
        if (
          !freezeSelection ||
          selectedCountry.dialCode.length > inputNumber.length
        ) {
          currentSelectedCountry = guessSelectedCountry(
            inputNumber.substring(0, 6),
            computedOnlyCountries,
            defaultCountry,
          ) as Country;
          setFreezeSelection(false);
        }
        newFormattedNumber = formatDisplayedNumber(
          inputNumber,
          currentSelectedCountry.format,
        );
      }

      let caretPosition = e.target.selectionStart || 0;
      const diff = newFormattedNumber.length - formattedNumber.length;

      if (isModernBrowser?.()) {
        requestAnimationFrame(() => {
          const input = inputRef.current;
          if (!input) return;

          if (diff > 0) {
            caretPosition -= diff;
          }

          const lastChar = newFormattedNumber.charAt(
            newFormattedNumber.length - 1,
          );
          if (lastChar === ')') {
            input.setSelectionRange(
              newFormattedNumber.length - 1,
              newFormattedNumber.length - 1,
            );
          } else if (
            caretPosition > 0 &&
            formattedNumber.length >= newFormattedNumber.length
          ) {
            input.setSelectionRange(caretPosition, caretPosition);
          }
        });
      }

      if (onChange) {
        onChange(newFormattedNumber, getCountryData(currentSelectedCountry));
      }
    },
    [
      selectedCountry,
      freezeSelection,
      countryCodeEditable,
      disableCountryCode,
      formattedNumber,
      computedOnlyCountries,
      defaultCountry,
      formatDisplayedNumber,
      isModernBrowser,
      onChange,
      getCountryData,
    ],
  );

  const handleFlagItemClick = useCallback(
    (country: string | Country) => {
      const nextSelectedCountry = isString(country)
        ? find(
            computedOnlyCountries,
            (countryItem) => countryItem.iso2 === country,
          )
        : find(computedOnlyCountries, country);

      if (!nextSelectedCountry) return;

      const unformattedNumber = formattedNumber
        .replace(' ', '')
        .replace('(', '')
        .replace(')', '')
        .replace('-', '');
      const newNumber =
        unformattedNumber.length > 1
          ? unformattedNumber.replace(
              selectedCountry.dialCode,
              nextSelectedCountry.dialCode,
            )
          : nextSelectedCountry.dialCode;

      const newFormattedNumber = formatDisplayedNumber(
        newNumber.replace(/\D/g, ''),
        nextSelectedCountry.format,
      );

      if (onChange) {
        onChange(newFormattedNumber, getCountryData(nextSelectedCountry));
      }

      setAnchorEl(null);
      setFreezeSelection(true);
      setTimeout(() => cursorToEnd(), 0);
    },
    [
      formattedNumber,
      selectedCountry,
      computedOnlyCountries,
      formatDisplayedNumber,
      onChange,
      cursorToEnd,
      getCountryData,
    ],
  );

  const handleInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setCurrentPlaceholder('');
      if (onFocus) {
        onFocus(e, getCountryData(selectedCountry));
      }
      setTimeout(() => cursorToEnd(), 10);
    },
    [onFocus, cursorToEnd, getCountryData, selectedCountry],
  );

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!e.target.value) {
        setCurrentPlaceholder(propsPlaceholder || '');
      }
      if (onBlur) {
        onBlur(e, getCountryData(selectedCountry));
      }
    },
    [propsPlaceholder, onBlur, getCountryData, selectedCountry],
  );

  const handleInputClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(e, getCountryData(selectedCountry));
      }
    },
    [onClick, getCountryData, selectedCountry],
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

  // -- Dropdown Utils --

  const scrollTo = useCallback((countryElement: HTMLElement | null) => {
    if (!countryElement || !countryElement.parentElement) return;
    countryElement.parentElement.scrollTop = countryElement.offsetTop;
  }, []);

  const getHighlightCountryIndex = useCallback(
    (direction: number) => {
      const totalCount =
        computedOnlyCountries.length + computedPreferredCountries.length;
      let newIndex = highlightCountryIndex + direction;

      if (newIndex < 0 || newIndex >= totalCount) {
        newIndex -= direction;
      }
      return newIndex;
    },
    [highlightCountryIndex, computedOnlyCountries, computedPreferredCountries],
  );

  const searchCountry = useCallback(() => {
    const getProbableCandidate = (searchQuery: string) => {
      if (!searchQuery || searchQuery.length === 0) return null;
      return filter(computedOnlyCountries, (country) =>
        startsWith(country.name.toLowerCase(), searchQuery.toLowerCase()),
      )[0];
    };

    const probableCandidate =
      getProbableCandidate(queryString) || computedOnlyCountries[0];
    const newHighlightCountryIndex =
      findIndex(computedOnlyCountries, probableCandidate) +
      computedPreferredCountries.length;

    const element = flagsRef.current[`flag_no_${newHighlightCountryIndex}`];
    scrollTo(element);

    setQueryString('');
    setHighlightCountryIndex(newHighlightCountryIndex);
  }, [
    queryString,
    computedOnlyCountries,
    computedPreferredCountries,
    scrollTo,
  ]);

  const debouncedSearchCountry = useMemo(
    () => debounce(searchCountry, 100),
    [searchCountry],
  );

  const handleKeydown = useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: event type --- IGNORE ---
    (e: any) => {
      if (!anchorEl || props.disabled || !keys) return;

      if (e.preventDefault) e.preventDefault();

      const moveHighlight = (direction: number) => {
        const newIndex = getHighlightCountryIndex(direction);
        setHighlightCountryIndex(newIndex);
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
          const selected = allItems[highlightCountryIndex];
          if (selected) handleFlagItemClick(selected);
          break;
        }
        case keys.ESC:
          setAnchorEl(null);
          cursorToEnd();
          break;
        default:
          if (
            (e.which >= keys.A && e.which <= keys.Z) ||
            e.which === keys.SPACE
          ) {
            setQueryString((prev) => prev + String.fromCharCode(e.which));
            debouncedSearchCountry();
          }
      }
    },
    [
      anchorEl,
      highlightCountryIndex,
      props.disabled,
      keys,
      computedOnlyCountries,
      computedPreferredCountries,
      handleFlagItemClick,
      cursorToEnd,
      debouncedSearchCountry,
      scrollTo,
      getHighlightCountryIndex,
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
        // biome-ignore lint/suspicious/noExplicitAny: inputRef could be any
        else (props.inputRef as any).current = ref;
      }
    },
    [props.inputRef],
  );

  const checkIfValid = useCallback(() => {
    if (isValid) {
      return isValid(formattedNumber.replace(/\D/g, ''));
    }
    return true;
  }, [isValid, formattedNumber]);

  return {
    formattedNumber,
    selectedCountry,
    highlightCountryIndex,
    queryString,
    freezeSelection,
    anchorEl,
    placeholder: currentPlaceholder,
    computedOnlyCountries,
    computedPreferredCountries,
    flagsRef,
    inputRef,
    setAnchorEl,
    setHighlightCountryIndex,
    setQueryString,
    setFreezeSelection,
    setCurrentPlaceholder,
    handleInput,
    handleInputClick,
    handleInputFocus,
    handleInputBlur,
    handleKeydown,
    handleInputKeyDown,
    handleRefInput,
    handleFlagItemClick,
    isValid: checkIfValid,
  };
};

/* eslint-disable class-methods-use-this */

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import * as Flags from 'country-flag-icons/react/3x2';
import {
  debounce,
  filter,
  find,
  findIndex,
  head,
  includes,
  isString,
  map,
  memoize,
  reduce,
  some,
  startsWith,
  tail,
  trim,
} from 'lodash';
import React from 'react';
import countryData, { type Country } from '../country_data';
import type { MuiPhoneNumberProps, MuiPhoneNumberState } from '../types';
import Item from './Item';

class MaterialUiPhoneNumber extends React.Component<
  MuiPhoneNumberProps,
  MuiPhoneNumberState
> {
  static defaultProps = {
    excludeCountries: [],
    onlyCountries: [],
    preferredCountries: [],
    defaultCountry: '',

    placeholder: '+1 (702) 123-4567',
    disabled: false,
    error: false,
    variant: 'standard',
    native: false,

    inputClass: '',
    dropdownClass: '',

    autoFormat: true,
    disableAreaCodes: false,
    isValid: (inputNumber: string) =>
      some(
        countryData.allCountries,
        (country) =>
          startsWith(inputNumber, country.dialCode) ||
          startsWith(country.dialCode, inputNumber),
      ),
    disableCountryCode: false,
    disableDropdown: false,
    enableLongNumbers: false,
    countryCodeEditable: true,

    regions: '',

    localization: {},

    onEnterKeyPress: () => {},
    onChange: () => {},

    isModernBrowser: () =>
      document.createElement
        ? Boolean(document.createElement('input').setSelectionRange)
        : false,

    keys: {
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
  };

  static displayName = 'MuiPhoneNumber';

  flags: { [key: string]: HTMLElement | null } = {};
  inputRef: HTMLInputElement | null = null;
  dropdownContainerRef: HTMLDivElement | null = null;

  guessSelectedCountry = memoize(
    (inputNumber: string, onlyCountries: Country[], defaultCountry: string) => {
      const secondBestGuess =
        find(onlyCountries, { iso2: defaultCountry }) || ({} as Country);
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
    },
  );

  constructor(props: MuiPhoneNumberProps) {
    super(props);
    let filteredCountries = countryData.allCountries;

    if (props.disableAreaCodes)
      filteredCountries = this.deleteAreaCodes(filteredCountries);
    if (props.regions)
      filteredCountries = this.filterRegions(props.regions, filteredCountries);

    const onlyCountries = this.excludeCountries(
      this.getOnlyCountries(props.onlyCountries || [], filteredCountries),
      props.excludeCountries || [],
    );

    const preferredCountries = filter(filteredCountries, (country) =>
      some(
        props.preferredCountries,
        (preferredCountry) => preferredCountry === country.iso2,
      ),
    );

    const inputNumber = (props.value as string) || '';

    let countryGuess: Country | undefined;
    if (inputNumber.length > 1) {
      // Country detect by value field
      countryGuess =
        this.guessSelectedCountry(
          inputNumber.replace(/\D/g, '').substring(0, 6),
          onlyCountries,
          props.defaultCountry || '',
        ) || ({} as Country);
    } else if (props.defaultCountry) {
      // Default country
      countryGuess = find(onlyCountries, { iso2: props.defaultCountry });
    }

    if (!countryGuess || !countryGuess.dialCode) {
      countryGuess = { dialCode: '', priority: 10001 } as Country;
    }

    const countryGuessIndex = findIndex(countryData.allCountries, countryGuess);
    const dialCode =
      inputNumber.length < 2 &&
      countryGuess &&
      countryGuess.dialCode &&
      !startsWith(inputNumber.replace(/\D/g, ''), countryGuess.dialCode)
        ? countryGuess.dialCode
        : '';

    const formattedNumber =
      inputNumber === '' && (!countryGuess || !countryGuess.name)
        ? ''
        : this.formatNumber(
            (props.disableCountryCode ? '' : dialCode) +
              inputNumber.replace(/\D/g, ''),
            countryGuess.name ? countryGuess.format : undefined,
          );

    this.state = {
      formattedNumber,
      placeholder: props.placeholder || '',
      onlyCountries,
      preferredCountries,
      defaultCountry: props.defaultCountry || '',
      selectedCountry: countryGuess,
      highlightCountryIndex: countryGuessIndex,
      queryString: '',
      freezeSelection: false,
      debouncedQueryStingSearcher: debounce(this.searchCountry, 100),
      anchorEl: null,
    };
  }

  componentDidMount() {
    if (document.addEventListener) {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }

  componentDidUpdate(prevProps: MuiPhoneNumberProps) {
    const { defaultCountry: prevDefaultCountry, formattedNumber } = this.state;
    const { defaultCountry, value } = this.props;

    if (defaultCountry && defaultCountry !== prevDefaultCountry) {
      this.updateDefaultCountry(defaultCountry);
    }

    if (
      typeof value === 'string' &&
      value !== prevProps.value &&
      value !== formattedNumber
    ) {
      this.updateFormattedNumber(value);
    }
  }

  componentWillUnmount() {
    if (document.removeEventListener) {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }

  getProbableCandidate = memoize((queryString: string) => {
    if (!queryString || queryString.length === 0) {
      return null;
    }

    const { onlyCountries } = this.state;

    // don't include the preferred countries in search
    const probableCountries = filter(
      onlyCountries,
      (country) =>
        startsWith(country.name.toLowerCase(), queryString.toLowerCase()),
    );
    return probableCountries[0];
  });

  getOnlyCountries = (
    onlyCountriesArray: string[],
    filteredCountries: Country[],
  ) => {
    if (onlyCountriesArray.length === 0) return filteredCountries;

    return filteredCountries.filter((country) =>
      onlyCountriesArray.some((element) => element === country.iso2),
    );
  };

  excludeCountries = (
    selectedCountries: Country[],
    excludedCountries: string[],
  ) => {
    if (excludedCountries.length === 0) {
      return selectedCountries;
    }
    return filter(
      selectedCountries,
      (selCountry) => !includes(excludedCountries, selCountry.iso2),
    );
  };

  filterRegions = (regions: string | string[], filteredCountries: Country[]) => {
    if (typeof regions === 'string') {
      const region = regions;
      return filteredCountries.filter((country) =>
        country.regions.some((element) => element === region),
      );
    }

    return filteredCountries.filter((country) => {
      const matches = regions.map((region) =>
        country.regions.some((element) => element === region),
      );
      return matches.some((el) => el);
    });
  };

  // Countries array methods
  deleteAreaCodes = (filteredCountries: Country[]) =>
    filteredCountries.filter((country) => country.isAreaCode !== true);

  // Hooks for updated props
  updateDefaultCountry = (country: string) => {
    const { onlyCountries } = this.state;
    const { disableCountryCode } = this.props;

    const newSelectedCountry =
      find(onlyCountries, { iso2: country }) || ({} as Country);

    this.setState({
      defaultCountry: country,
      selectedCountry: newSelectedCountry,
      formattedNumber: disableCountryCode
        ? ''
        : `+${newSelectedCountry.dialCode}`,
    });
  };

  // View methods
  scrollTo = (country: HTMLElement | null) => {
    if (!country) {
      return;
    }

    const container = country.parentElement;

    if (!container || !document.body) {
      return;
    }
    container.scrollTop = country.offsetTop;
  };

  formatNumber = (text: string, patternArg?: string) => {
    const { disableCountryCode, enableLongNumbers, autoFormat } = this.props;

    let pattern: string | undefined = '';
    if (disableCountryCode && patternArg) {
      pattern = patternArg.split(' ').slice(1).join(' ');
    } else {
      pattern = patternArg;
    }

    if (!text || text.length === 0) {
      return disableCountryCode ? '' : '+';
    }

    // for all strings with length less than 3, just return it (1, 2 etc.)
    // also return the same text if the selected country has no fixed format
    if ((text && text.length < 2) || !pattern || !autoFormat) {
      return disableCountryCode ? text : `+${text}`;
    }

    const formattedObject = reduce(
      pattern,
      (acc: { formattedText: string; remainingText: string[] }, character: string) => {
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
        formattedObject.formattedText + formattedObject.remainingText.join('');
    } else {
      formattedNumber = formattedObject.formattedText;
    }

    // Always close brackets
    if (formattedNumber.includes('(') && !formattedNumber.includes(')'))
      formattedNumber += ')';
    return formattedNumber;
  };

  // Put the cursor to the end of the input (usually after a focus event)
  cursorToEnd = () => {
    const { isModernBrowser } = this.props;

    const input = this.inputRef;
    if (input) {
      input.focus();
      if (isModernBrowser && isModernBrowser()) {
        const len = input.value.length;
        input.setSelectionRange(len, len);
      }
    }
  };

  getElement = (index: number) => this.flags[`flag_no_${index}`];

  // return country data from state
  getCountryData = () => {
    const { selectedCountry } = this.state;

    if (!selectedCountry) return {} as Country;

    return {
      name: selectedCountry.name || '',
      dialCode: selectedCountry.dialCode || '',
      countryCode: selectedCountry.iso2 || '',
    } as unknown as Country;
  };

  handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let { selectedCountry: newSelectedCountry, freezeSelection } = this.state;
    const {
      selectedCountry,
      formattedNumber: oldFormattedText,
      onlyCountries,
      defaultCountry,
    } = this.state;
    const {
      disableCountryCode,
      countryCodeEditable,
      isModernBrowser,
      onChange,
    } = this.props;

    let formattedNumber = disableCountryCode ? '' : '+';

    if (!countryCodeEditable) {
      const updatedInput = `+${newSelectedCountry.dialCode}`;
      if (e.target.value.length < updatedInput.length) {
        return;
      }
    }

    // Does not exceed 15 digit phone number limit
    if (e.target.value.replace(/\D/g, '').length > 15) {
      return;
    }

    // if the input is the same as before, must be some special key like enter etc.
    if (e.target.value === oldFormattedText) {
      return;
    }

    if (e.target.value.length > 0) {
      // before entering the number in new format, lets check if the dial code now matches some other country
      const inputNumber = e.target.value.replace(/\D/g, '');

      // we don't need to send the whole number to guess the country... only the first 6 characters are enough
      // the guess country function can then use memoization much more effectively since the set of input it
      // gets has drastically reduced
      if (
        !freezeSelection ||
        selectedCountry.dialCode.length > inputNumber.length
      ) {
        newSelectedCountry = this.guessSelectedCountry(
          inputNumber.substring(0, 6),
          onlyCountries,
          defaultCountry,
        ) as Country;
        freezeSelection = false;
      }
      // let us remove all non numerals from the input
      formattedNumber = this.formatNumber(
        inputNumber,
        newSelectedCountry.format,
      );
    }

    let caretPosition = e.target.selectionStart || 0;
    const diff = formattedNumber.length - oldFormattedText.length;

    this.setState(
      {
        formattedNumber,
        freezeSelection,
        selectedCountry: newSelectedCountry.dialCode
          ? newSelectedCountry
          : selectedCountry,
      },
      () => {
        if (isModernBrowser && isModernBrowser()) {
          if (diff > 0) {
            caretPosition -= diff;
          }

          const lastChar = formattedNumber.charAt(formattedNumber.length - 1);

          if (lastChar === ')') {
            this.inputRef?.setSelectionRange(
              formattedNumber.length - 1,
              formattedNumber.length - 1,
            );
          } else if (
            caretPosition > 0 &&
            oldFormattedText.length >= formattedNumber.length
          ) {
            this.inputRef?.setSelectionRange(caretPosition, caretPosition);
          }
        }

        if (onChange) {
          onChange(formattedNumber, this.getCountryData());
        }
      },
    );
  };

  handleRefInput = (ref: HTMLInputElement) => {
    const { inputRef, InputProps } = this.props;
    this.inputRef = ref;

    let refProp;

    if (inputRef) {
      refProp = inputRef;
    } else if (InputProps?.ref) {
      refProp = InputProps.ref;
    }

    if (refProp) {
      if (typeof refProp === 'function') {
        refProp(ref);
      } else {
        refProp.current = ref;
      }
    }
  };

  handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(e, this.getCountryData());
    }
  };

  handleFlagItemClick = (country: string | Country) => {
    const { formattedNumber, selectedCountry, onlyCountries } = this.state;
    const { onChange } = this.props;

    const currentSelectedCountry = selectedCountry;
    const nextSelectedCountry = isString(country)
      ? find(onlyCountries, (countryItem) => countryItem.iso2 === country)
      : find(onlyCountries, country);

    if (!nextSelectedCountry) return;

    const unformattedNumber = formattedNumber
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

    const newFormattedNumber = this.formatNumber(
      newNumber.replace(/\D/g, ''),
      nextSelectedCountry.format,
    );

    this.setState(
      {
        anchorEl: null,
        selectedCountry: nextSelectedCountry,
        freezeSelection: true,
        formattedNumber: newFormattedNumber,
      },
      () => {
        this.cursorToEnd();
        if (onChange) {
          onChange(newFormattedNumber, this.getCountryData());
        }
      },
    );
  };

  handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { selectedCountry } = this.state;
    const { disableCountryCode, onFocus } = this.props;

    // if the input is blank, insert dial code of the selected country
    if (this.inputRef) {
      if (
        this.inputRef.value === '+' &&
        selectedCountry &&
        !disableCountryCode
      ) {
        this.setState(
          {
            formattedNumber: `+${selectedCountry.dialCode}`,
          },
          () => setTimeout(this.cursorToEnd, 10),
        );
      }
    }

    this.setState({ placeholder: '' });

    if (onFocus) {
      onFocus(e, this.getCountryData());
    }

    setTimeout(this.cursorToEnd, 10);
  };

  handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { placeholder, onBlur } = this.props;

    if (!e.target.value) {
      this.setState({ placeholder: placeholder || '' });
    }

    if (onBlur) {
      onBlur(e, this.getCountryData());
    }
  };

  getHighlightCountryIndex = (direction: number) => {
    const {
      highlightCountryIndex: oldHighlightCountryIndex,
      onlyCountries,
      preferredCountries,
    } = this.state;

    // had to write own function because underscore does not have findIndex. lodash has it
    const highlightCountryIndex = oldHighlightCountryIndex + direction;

    if (
      highlightCountryIndex < 0 ||
      highlightCountryIndex >= onlyCountries.length + preferredCountries.length
    ) {
      return highlightCountryIndex - direction;
    }

    return highlightCountryIndex;
  };

  searchCountry = () => {
    const { queryString, onlyCountries, preferredCountries } = this.state;

    const probableCandidate =
      this.getProbableCandidate(queryString) || onlyCountries[0];
    const probableCandidateIndex =
      findIndex(onlyCountries, probableCandidate) + preferredCountries.length;

    this.scrollTo(this.getElement(probableCandidateIndex));

    this.setState({
      queryString: '',
      highlightCountryIndex: probableCandidateIndex,
    });
  };

  handleKeydown = (e: any) => {
    // Using any for keyboard event on document as it's not a React event
    const {
      anchorEl,
      highlightCountryIndex,
      preferredCountries,
      onlyCountries,
      queryString,
      debouncedQueryStingSearcher,
    } = this.state;
    const { keys, disabled } = this.props;

    if (!anchorEl || disabled || !keys) return;

    // ie hack
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }

    const moveHighlight = (direction: number) => {
      this.setState(
        {
          highlightCountryIndex: this.getHighlightCountryIndex(direction),
        },
        () => {
          this.scrollTo(
            this.getElement(highlightCountryIndex + preferredCountries.length),
          );
        },
      );
    };

    switch (e.which) {
      case keys.DOWN:
        moveHighlight(1);
        break;
      case keys.UP:
        moveHighlight(-1);
        break;
      case keys.ENTER:
        this.handleFlagItemClick(onlyCountries[highlightCountryIndex]);
        break;
      case keys.ESC:
        this.setState(
          {
            anchorEl: null,
          },
          this.cursorToEnd,
        );
        break;
      default:
        if (
          (e.which >= keys.A && e.which <= keys.Z) ||
          e.which === keys.SPACE
        ) {
          this.setState(
            {
              queryString: queryString + String.fromCharCode(e.which),
            },
            debouncedQueryStingSearcher,
          );
        }
    }
  };

  handleInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { keys, onEnterKeyPress, onKeyDown } = this.props;
    if (keys && e.which === keys.ENTER && onEnterKeyPress) {
      onEnterKeyPress(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  checkIfValid = () => {
    const { formattedNumber } = this.state;
    const { isValid } = this.props;

    if (isValid) {
      return isValid(formattedNumber.replace(/\D/g, ''));
    }
    return true;
  };

  updateFormattedNumber = (number: string) => {
    const { onlyCountries, defaultCountry } = this.state;
    const { disableCountryCode } = this.props;

    let countryGuess: Country | undefined;
    let inputNumber = number;
    let formattedNumber = number;

    // if inputNumber does not start with '+', then use default country's dialing prefix,
    // otherwise use logic for finding country based on country prefix.
    if (!inputNumber.startsWith('+')) {
      countryGuess = find(onlyCountries, { iso2: defaultCountry });
      const dialCode =
        countryGuess &&
        !startsWith(inputNumber.replace(/\D/g, ''), countryGuess.dialCode)
          ? countryGuess.dialCode
          : '';
      formattedNumber = this.formatNumber(
        (disableCountryCode ? '' : dialCode) + inputNumber.replace(/\D/g, ''),
        countryGuess ? countryGuess.format : undefined,
      );
    } else {
      inputNumber = inputNumber.replace(/\D/g, '');
      countryGuess = this.guessSelectedCountry(
        inputNumber.substring(0, 6),
        onlyCountries,
        defaultCountry,
      ) as Country;
      formattedNumber = this.formatNumber(inputNumber, countryGuess.format);
    }

    if (countryGuess) {
      this.setState({ selectedCountry: countryGuess, formattedNumber });
    }
  };

  getDropdownProps = () => {
    const { selectedCountry, anchorEl, preferredCountries, onlyCountries } =
      this.state;

    const styles = {
      flagButton: {
        minWidth: 30,
        padding: 0,
        height: 30,
      },
      native: {
        width: 30,
        height: 30,
        padding: 8,
      },
      nativeRoot: {
        padding: 0,
        '& + svg': {
          display: 'none',
        },
      },
      nativeSelect: {
        padding: 0,
        lineHeight: 0,
        height: 11,
      },
      positionStart: {
        position: 'relative' as const,
      },
      flagIcon: {
        width: 30,
        height: 24,
        paddingRight: 8,
      },
    };

    const { dropdownClass, localization, disableDropdown, native } = this.props;

    onlyCountries.sort((a, b) => {
      const localizedA = localization?.[a.name] || a.name;
      const localizedB = localization?.[b.name] || b.name;
      return localizedA.localeCompare(localizedB);
    });

    const isSelected = (country: Country) =>
      Boolean(selectedCountry && selectedCountry.dialCode === country.dialCode);

    const FlagComponent = (Flags as any)[selectedCountry.iso2.toUpperCase()];

    const dropdownProps = disableDropdown
      ? {}
      : {
          startAdornment: (
            <InputAdornment style={styles.positionStart} position="start">
              {native ? (
                <NativeSelect
                  id="country-menu"
                  // open prop not supported on NativeSelect
                  style={styles.native}
                  sx={{
                    root: styles.nativeRoot, // clsx(classes.nativeRoot, 'native'),
                    select: styles.nativeSelect,
                  }}
                  onChange={(e) => this.handleFlagItemClick(e.target.value)}
                  IconComponent={Boolean(FlagComponent) && FlagComponent}
                  disableUnderline
                >
                  {!!preferredCountries.length &&
                    map(preferredCountries, (country: Country, index: number) => (
                      <Item
                        key={`preferred_${country.iso2}_${index}`}
                        itemRef={(node) => {
                          this.flags[`flag_no_${index}`] = node as HTMLLIElement;
                        }}
                        name={country.name}
                        iso2={country.iso2}
                        dialCode={country.dialCode}
                        localization={localization?.[country.name]}
                        native
                      />
                    ))}

                  {map(onlyCountries, (country: Country, index: number) => (
                    <Item
                      key={`preferred_${country.iso2}_${index}`}
                      itemRef={(node) => {
                        this.flags[`flag_no_${index}`] = node as HTMLLIElement;
                      }}
                      name={country.name}
                      iso2={country.iso2}
                      dialCode={country.dialCode}
                      localization={localization?.[country.name]}
                      native
                    />
                  ))}
                </NativeSelect>
              ) : (
                <>
                  <IconButton
                    style={styles.flagButton}
                    aria-owns={anchorEl ? 'country-menu' : undefined}
                    aria-label="Select country"
                    onClick={(e) =>
                      this.setState({ anchorEl: e.currentTarget })
                    }
                    aria-haspopup
                  >
                    {Boolean(FlagComponent) && (
                      <FlagComponent className="margin" />
                    )}
                  </IconButton>

                  <Menu
                    className={dropdownClass}
                    id="country-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => this.setState({ anchorEl: null })}
                  >
                    {!!preferredCountries.length &&
                      map(preferredCountries, (country: Country, index: number) => (
                        <Item
                          key={`preferred_${country.iso2}_${index}`}
                          itemRef={(node) => {
                            this.flags[`flag_no_${index}`] = node as HTMLLIElement;
                          }}
                          selected={isSelected(country)}
                          onClick={() => this.handleFlagItemClick(country)}
                          name={country.name}
                          iso2={country.iso2}
                          dialCode={country.dialCode}
                          localization={localization?.[country.name]}
                          style={styles.flagIcon}
                        />
                      ))}

                    {!!preferredCountries.length && <Divider />}

                    {map(onlyCountries, (country: Country, index: number) => (
                      <Item
                        key={`preferred_${country.iso2}_${index}`}
                        itemRef={(node) => {
                          this.flags[`flag_no_${index}`] = node as HTMLLIElement;
                        }}
                        selected={isSelected(country)}
                        onClick={() => this.handleFlagItemClick(country)}
                        name={country.name}
                        iso2={country.iso2}
                        dialCode={country.dialCode}
                        localization={localization?.[country.name]}
                        style={styles.flagIcon}
                      />
                    ))}
                  </Menu>
                </>
              )}
            </InputAdornment>
          ),
        };

    return dropdownProps;
  };

  render() {
    const { formattedNumber, placeholder: statePlaceholder } = this.state;

    const {
      // start placeholder props
      native,
      defaultCountry,
      excludeCountries,
      onlyCountries,
      preferredCountries,
      dropdownClass,
      autoFormat,
      disableAreaCodes,
      isValid,
      disableCountryCode,
      disableDropdown,
      enableLongNumbers,
      countryCodeEditable,
      onEnterKeyPress,
      isModernBrowser,
      classes,
      keys,
      localization,
      placeholder,
      regions,
      onChange,
      value,
      // end placeholder props
      inputClass,
      error,
      InputProps,
      ...restProps
    } = this.props;

    const dropdownProps = this.getDropdownProps();

    return (
      <TextField
        placeholder={statePlaceholder}
        value={formattedNumber}
        className={inputClass}
        inputRef={this.handleRefInput}
        error={error || !this.checkIfValid()}
        onChange={this.handleInput}
        onClick={this.handleInputClick}
        onFocus={this.handleInputFocus}
        onBlur={this.handleInputBlur}
        onKeyDown={this.handleInputKeyDown}
        type="tel"
        InputProps={{
          ...dropdownProps,
          ...InputProps,
        }}
        {...restProps}
      />
    );
  }
}

export default MaterialUiPhoneNumber;
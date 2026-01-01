import { default as React } from 'react';
import { Country } from '../country_data';
import { MuiPhoneNumberProps, MuiPhoneNumberState } from '../types';

declare class MaterialUiPhoneNumber extends React.Component<MuiPhoneNumberProps, MuiPhoneNumberState> {
    static defaultProps: {
        excludeCountries: never[];
        onlyCountries: never[];
        preferredCountries: never[];
        defaultCountry: string;
        placeholder: string;
        disabled: boolean;
        error: boolean;
        variant: string;
        native: boolean;
        inputClass: string;
        dropdownClass: string;
        autoFormat: boolean;
        disableAreaCodes: boolean;
        isValid: (inputNumber: string) => boolean;
        disableCountryCode: boolean;
        disableDropdown: boolean;
        enableLongNumbers: boolean;
        countryCodeEditable: boolean;
        regions: string;
        localization: {};
        onEnterKeyPress: () => void;
        onChange: () => void;
        isModernBrowser: () => boolean;
        keys: {
            UP: number;
            DOWN: number;
            RIGHT: number;
            LEFT: number;
            ENTER: number;
            ESC: number;
            PLUS: number;
            A: number;
            Z: number;
            SPACE: number;
        };
    };
    static displayName: string;
    flags: {
        [key: string]: HTMLElement | null;
    };
    inputRef: HTMLInputElement | null;
    dropdownContainerRef: HTMLDivElement | null;
    guessSelectedCountry: ((inputNumber: string, onlyCountries: Country[], defaultCountry: string) => Country) & import('lodash').MemoizedFunction;
    constructor(props: MuiPhoneNumberProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: MuiPhoneNumberProps): void;
    componentWillUnmount(): void;
    getProbableCandidate: ((queryString: string) => Country | null) & import('lodash').MemoizedFunction;
    getOnlyCountries: (onlyCountriesArray: string[], filteredCountries: Country[]) => Country[];
    excludeCountries: (selectedCountries: Country[], excludedCountries: string[]) => Country[];
    filterRegions: (regions: string | string[], filteredCountries: Country[]) => Country[];
    deleteAreaCodes: (filteredCountries: Country[]) => Country[];
    updateDefaultCountry: (country: string) => void;
    scrollTo: (country: HTMLElement | null) => void;
    formatNumber: (text: string, patternArg?: string) => string;
    cursorToEnd: () => void;
    getElement: (index: number) => HTMLElement | null;
    getCountryData: () => Country;
    handleInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleRefInput: (ref: HTMLInputElement) => void;
    handleInputClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleFlagItemClick: (country: string | Country) => void;
    handleInputFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleInputBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    getHighlightCountryIndex: (direction: number) => number;
    searchCountry: () => void;
    handleKeydown: (e: any) => void;
    handleInputKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    checkIfValid: () => boolean;
    updateFormattedNumber: (number: string) => void;
    getDropdownProps: () => {
        startAdornment?: undefined;
    } | {
        startAdornment: import("react/jsx-runtime").JSX.Element;
    };
    render(): import("react/jsx-runtime").JSX.Element;
}
export default MaterialUiPhoneNumber;

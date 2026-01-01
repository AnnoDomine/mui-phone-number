import { TextFieldProps } from '@mui/material';
import * as React from 'react';
import type { Country } from './country_data';

export type { Country };

export type MuiPhoneNumberProps = Omit<TextFieldProps, 'onChange'> & {
  autoFormat?: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: complex MUI type
  classes?: any;
  countryCodeEditable?: boolean;
  defaultCountry?: string;
  disableAreaCodes?: boolean;
  disableCountryCode?: boolean;
  disableDropdown?: boolean;
  dropdownClass?: string;
  enableLongNumbers?: boolean;
  excludeCountries?: string[];
  inputClass?: string;
  onChange?: (
    value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    countryData?: Country,
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    countryData?: Country,
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    countryData?: Country,
  ) => void;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement>,
    countryData?: Country,
  ) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  isValid?: (value: string) => boolean;
  isModernBrowser?: () => boolean;
  onlyCountries?: string[];
  preferredCountries?: string[];
  regions?: string | string[];
  localization?: { [key: string]: string };
  keys?: {
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
  native?: boolean;
};

export interface MuiPhoneNumberState {
  formattedNumber: string;
  placeholder: string;
  onlyCountries: Country[];
  preferredCountries: Country[];
  defaultCountry: string;
  selectedCountry: Country;
  highlightCountryIndex: number;
  queryString: string;
  freezeSelection: boolean;
  debouncedQueryStingSearcher: () => void;
  anchorEl: HTMLElement | null;
}

declare const MuiPhoneNumber: React.ComponentClass<MuiPhoneNumberProps>;

export default MuiPhoneNumber;

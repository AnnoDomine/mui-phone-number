import type { TextFieldProps } from '@mui/material';
import type * as React from 'react';
import type { Country } from '../../country_data';

export interface MuiPhoneNumberProps
  extends Omit<TextFieldProps, 'onChange' | 'value'> {
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
  value?: string;
}

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
  anchorEl: HTMLElement | null;
}

// https://stackoverflow.com/questions/63165896/what-is-the-type-of-the-svg-element-in-typescript
// https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelement.html
// https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.svgelement.html
type HTMLSVGElement = HTMLElement & SVGElement;

// https://use-form.netlify.app/interfaces/_node_modules__types_react_index_d_.react.htmlattributes.html
// https://use-form.netlify.app/interfaces/_node_modules__types_react_index_d_.react.svgattributes.html
interface ElementAttributes<T>
  extends React.HTMLAttributes<T>,
    React.SVGAttributes<T> {}

interface Props extends ElementAttributes<HTMLSVGElement> {}

// React TypeScript Cheatsheet doesn't recommend using React.FunctionalComponent.
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
// declare const ReactTimeAgo: React.FC<Props>;

export type FlagComponent = (props: Props) => React.JSX.Element;

export type FlagMap = Record<string, FlagComponent>;

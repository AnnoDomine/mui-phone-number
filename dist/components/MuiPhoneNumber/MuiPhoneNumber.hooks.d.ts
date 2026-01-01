import { default as React } from 'react';
import { Country } from '../../country_data';
import { MuiPhoneNumberProps } from './MuiPhoneNumber.types';

export declare const useMuiPhoneNumber: (props: MuiPhoneNumberProps) => {
    formattedNumber: string;
    selectedCountry: Country;
    highlightCountryIndex: number;
    queryString: string;
    freezeSelection: boolean;
    anchorEl: HTMLElement | null;
    placeholder: string;
    computedOnlyCountries: Country[];
    computedPreferredCountries: Country[];
    flagsRef: React.RefObject<{
        [key: string]: HTMLElement | null;
    }>;
    inputRef: React.RefObject<HTMLInputElement | null>;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    setHighlightCountryIndex: React.Dispatch<React.SetStateAction<number>>;
    setQueryString: React.Dispatch<React.SetStateAction<string>>;
    setFreezeSelection: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentPlaceholder: React.Dispatch<React.SetStateAction<string>>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleInputClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleInputFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleInputBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleKeydown: (e: any) => void;
    handleInputKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    handleRefInput: (ref: HTMLInputElement) => void;
    handleFlagItemClick: (country: string | Country) => void;
    isValid: () => boolean;
};

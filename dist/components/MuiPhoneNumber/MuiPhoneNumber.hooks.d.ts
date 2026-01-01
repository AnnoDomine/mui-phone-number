import { default as React } from 'react';
import { Country } from '../../country_data';
import { MuiPhoneNumberProps } from './MuiPhoneNumber.types';

export declare const useMuiPhoneNumber: (props: MuiPhoneNumberProps) => {
    state: {
        formattedNumber: string;
        placeholder: string;
        selectedCountry: Country;
        highlightCountryIndex: number;
        queryString: string;
        freezeSelection: boolean;
        anchorEl: HTMLElement | null;
    };
    setState: React.Dispatch<React.SetStateAction<{
        formattedNumber: string;
        placeholder: string;
        selectedCountry: Country;
        highlightCountryIndex: number;
        queryString: string;
        freezeSelection: boolean;
        anchorEl: HTMLElement | null;
    }>>;
    flagsRef: React.RefObject<{
        [key: string]: HTMLElement | null;
    }>;
    inputRef: React.RefObject<HTMLInputElement | null>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleInputClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleInputFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleInputBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleKeydown: (e: any) => void;
    handleInputKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    handleRefInput: (ref: HTMLInputElement) => void;
    handleFlagItemClick: (country: string | Country) => void;
    computedOnlyCountries: Country[];
    computedPreferredCountries: Country[];
    isValid: () => boolean;
};

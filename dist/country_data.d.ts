export interface Country {
    name: string;
    regions: string[];
    iso2: string;
    dialCode: string;
    priority: number;
    format?: string;
    hasAreaCodes?: boolean;
    isAreaCode?: boolean;
}
declare const _default: {
    allCountries: Country[];
    allCountryCodes: {
        [key: string]: string[];
    };
};
export default _default;

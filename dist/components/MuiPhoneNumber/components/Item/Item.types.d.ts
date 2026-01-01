import { default as React } from 'react';

export interface ItemProps {
    name: string;
    iso2: string;
    dialCode: string;
    itemRef: React.Ref<HTMLLIElement>;
    localization?: string;
    native?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
    [key: string]: any;
}

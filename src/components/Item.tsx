import MenuItem from '@mui/material/MenuItem';
import * as Flags from 'country-flag-icons/react/3x2';
import React from 'react';

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

class Item extends React.PureComponent<ItemProps> {
  static defaultProps = {
    localization: null,
    native: false,
  };

  render() {
    const {
      name,
      iso2,
      dialCode,
      localization,
      itemRef,
      native,
      ...restProps
    } = this.props;

    if (native) {
      return (
        <option
          className="country"
          data-dial-code="1"
          data-country-code={iso2}
          value={iso2}
          {...restProps}
          onClick={restProps.onClick as any}
        >
          {localization || name} {`+${dialCode}`}
        </option>
      );
    }

    const FlagComponent = (Flags as any)[iso2.toUpperCase()];

    return (
      <MenuItem
        ref={itemRef}
        className="country"
        data-dial-code="1"
        data-country-code={iso2}
        {...restProps}
      >
        {Boolean(FlagComponent) && (
          <div
            className={restProps.className}
            style={{ width: 30, height: 24, paddingRight: 8 }}
          >
            <FlagComponent />
          </div>
        )}

        <span className="country-name">{localization || name}</span>

        <span className="dial-code">{`+${dialCode}`}</span>
      </MenuItem>
    );
  }
}

export default Item;

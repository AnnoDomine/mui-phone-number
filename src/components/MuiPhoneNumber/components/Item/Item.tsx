import MenuItem from '@mui/material/MenuItem';
import * as Flags from 'country-flag-icons/react/3x2';
import React from 'react';
import type { FlagMap } from '../../MuiPhoneNumber.types';
import type { ItemProps } from './Item.types';

const Item: React.FC<ItemProps> = ({
  name,
  iso2,
  dialCode,
  localization,
  itemRef,
  native = false,
  ...restProps
}) => {
  if (native) {
    return (
      <option
        className="country"
        data-dial-code={dialCode}
        data-country-code={iso2}
        value={iso2}
        {...restProps}
        // biome-ignore lint/suspicious/noExplicitAny: Casting onClick as option doesn't support the specific MouseEvent from MenuItem props inheritance usually
        onClick={restProps.onClick as any}
      >
        {localization || name} {`+${dialCode}`}
      </option>
    );
  }

  const FlagComponent = (Flags as FlagMap)[iso2.toUpperCase()];

  return (
    <MenuItem
      ref={itemRef}
      className="country"
      data-dial-code={dialCode}
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
      <span className="country-name">{localization || name}</span>{' '}
      <span className="dial-code">{`+${dialCode}`}</span>
    </MenuItem>
  );
};

export default React.memo(Item);

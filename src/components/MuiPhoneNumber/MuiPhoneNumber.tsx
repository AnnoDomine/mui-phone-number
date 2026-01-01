import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import * as Flags from 'country-flag-icons/react/3x2';
import { map } from 'lodash';
import React from 'react';
import type { Country } from '../../country_data';
import Item from './components/Item/Item';
import { useMuiPhoneNumber } from './MuiPhoneNumber.hooks';
import type { MuiPhoneNumberProps } from './MuiPhoneNumber.types';

const MuiPhoneNumber: React.FC<MuiPhoneNumberProps> = (props) => {
  const {
    classes,
    dropdownClass,
    disableDropdown,
    native,
    localization,
    inputClass,
    error,
    InputProps,
    variant = 'standard',
    ...restProps
  } = props;

  const {
    state,
    setState,
    flagsRef,
    handleInput,
    handleInputClick,
    handleInputFocus,
    handleInputBlur,
    handleKeydown,
    handleRefInput,
    handleFlagItemClick,
    computedOnlyCountries,
    computedPreferredCountries,
    isValid,
  } = useMuiPhoneNumber(props);

  const {
    formattedNumber,
    placeholder: statePlaceholder,
    selectedCountry,
    anchorEl,
  } = state;

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
                style={styles.native}
                sx={{
                  root: styles.nativeRoot,
                  select: styles.nativeSelect,
                }}
                onChange={(e) => handleFlagItemClick(e.target.value)}
                IconComponent={Boolean(FlagComponent) && FlagComponent}
                disableUnderline
              >
                {!!computedPreferredCountries.length &&
                  map(
                    computedPreferredCountries,
                    (country: Country, index: number) => (
                      <Item
                        key={`preferred_${country.iso2}_${index}`}
                        itemRef={(node) => {
                          flagsRef.current[`flag_no_${index}`] = node;
                        }}
                        name={country.name}
                        iso2={country.iso2}
                        dialCode={country.dialCode}
                        localization={localization?.[country.name]}
                        native
                      />
                    ),
                  )}

                {map(
                  computedOnlyCountries,
                  (country: Country, index: number) => (
                    <Item
                      key={`preferred_${country.iso2}_${index}`}
                      itemRef={(node) => {
                        flagsRef.current[`flag_no_${index}`] = node;
                      }}
                      name={country.name}
                      iso2={country.iso2}
                      dialCode={country.dialCode}
                      localization={localization?.[country.name]}
                      native
                    />
                  ),
                )}
              </NativeSelect>
            ) : (
              <>
                <IconButton
                  style={styles.flagButton}
                  aria-owns={anchorEl ? 'country-menu' : undefined}
                  aria-label="Select country"
                  onClick={(e) =>
                    setState((prev) => ({ ...prev, anchorEl: e.currentTarget }))
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
                  onClose={() =>
                    setState((prev) => ({ ...prev, anchorEl: null }))
                  }
                >
                  {!!computedPreferredCountries.length &&
                    map(
                      computedPreferredCountries,
                      (country: Country, index: number) => (
                        <Item
                          key={`preferred_${country.iso2}_${index}`}
                          itemRef={(node) => {
                            flagsRef.current[`flag_no_${index}`] = node;
                          }}
                          selected={isSelected(country)}
                          onClick={() => handleFlagItemClick(country)}
                          name={country.name}
                          iso2={country.iso2}
                          dialCode={country.dialCode}
                          localization={localization?.[country.name]}
                          style={styles.flagIcon}
                        />
                      ),
                    )}

                  {!!computedPreferredCountries.length && <Divider />}

                  {map(
                    computedOnlyCountries,
                    (country: Country, index: number) => (
                      <Item
                        key={`preferred_${country.iso2}_${index}`}
                        itemRef={(node) => {
                          flagsRef.current[`flag_no_${index}`] = node;
                        }}
                        selected={isSelected(country)}
                        onClick={() => handleFlagItemClick(country)}
                        name={country.name}
                        iso2={country.iso2}
                        dialCode={country.dialCode}
                        localization={localization?.[country.name]}
                        style={styles.flagIcon}
                      />
                    ),
                  )}
                </Menu>
              </>
            )}
          </InputAdornment>
        ),
      };

  return (
    <TextField
      variant={variant}
      placeholder={statePlaceholder}
      value={formattedNumber}
      className={inputClass}
      inputRef={handleRefInput}
      error={error || !isValid()}
      onChange={handleInput}
      onClick={handleInputClick}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onKeyDown={handleKeydown}
      type="tel"
      InputProps={{
        ...dropdownProps,
        ...InputProps,
      }}
      {...restProps}
    />
  );
};

export default MuiPhoneNumber;

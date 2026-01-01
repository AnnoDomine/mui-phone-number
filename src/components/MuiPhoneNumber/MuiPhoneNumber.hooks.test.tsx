import { renderHook, act } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useMuiPhoneNumber } from './MuiPhoneNumber.hooks';
import type { MuiPhoneNumberProps } from './MuiPhoneNumber.types';

describe('useMuiPhoneNumber', () => {
  const defaultProps: MuiPhoneNumberProps = {
    defaultCountry: 'us',
  };

  it('should initialize with default country', () => {
    const { result } = renderHook(() => useMuiPhoneNumber(defaultProps));
    expect(result.current.selectedCountry.iso2).toBe('us');
    expect(result.current.selectedCountry.dialCode).toBe('1');
  });

  it('should format initial value correctly', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      value: '17021234567'
    }));
    expect(result.current.formattedNumber).toBe('+1 (702) 123-4567');
  });

  it('should handle input change', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      onChange
    }));

    act(() => {
      const event = {
        target: { value: '17021234567' },
        selectionStart: 11
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      result.current.handleInput(event);
    });

    expect(onChange).toHaveBeenCalledWith('+1 (702) 123-4567', expect.objectContaining({
      countryCode: 'us',
      dialCode: '1702'
    }));
  });

  it('should switch country when dial code changes', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      onChange
    }));

    act(() => {
      const event = {
        target: { value: '447021234567' },
        selectionStart: 12
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      result.current.handleInput(event);
    });

    expect(onChange).toHaveBeenCalledWith('+44 7021 234567', expect.objectContaining({
      countryCode: 'gb',
      dialCode: '44'
    }));
  });

  it('should handle flag item click', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      onChange
    }));

    act(() => {
      result.current.handleFlagItemClick('gb');
    });

    expect(onChange).toHaveBeenCalledWith('+44', expect.objectContaining({
      countryCode: 'gb',
      dialCode: '44'
    }));
  });

  it('should respect disableCountryCode prop', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      disableCountryCode: true,
      onlyCountries: ['us'],
      value: '7021234567'
    }));
    // US format is '+. (...) ...-....'. split(' ') gives ['+.', '(...)', '...-....']
    // slice(1).join(' ') gives '(...) ...-....'
    expect(result.current.formattedNumber).toBe('(702) 123-4567');
  });

  it('should validate correctly', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      value: '1702'
    }));
    
    expect(result.current.isValid()).toBe(true); // Partial match is usually valid in this component's default isValid
  });

  it('should handle area codes correctly', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      value: '1204' // Manitoba, Canada area code
    }));
    // US is default but 204 matches Canada's area code
    expect(result.current.selectedCountry.iso2).toBe('ca');
    expect(result.current.selectedCountry.dialCode).toBe('1204');
  });

  it('should respect disableAreaCodes prop', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      disableAreaCodes: true,
      value: '1204'
    }));
    // Should stay US because Canada 204 is an area code entry
    expect(result.current.selectedCountry.iso2).toBe('us');
  });

  it('should handle preferredCountries', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      preferredCountries: ['gb', 'de']
    }));
    expect(result.current.computedPreferredCountries).toHaveLength(2);
    expect(result.current.computedPreferredCountries.some(c => c.iso2 === 'gb')).toBe(true);
    expect(result.current.computedPreferredCountries.some(c => c.iso2 === 'de')).toBe(true);
  });

  it('should handle enableLongNumbers', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      enableLongNumbers: true,
      value: '17021234567890'
    }));
    // US format is 10 digits after +1. 
    // +1 (702) 123-4567 is 10 digits. 890 should be appended.
    expect(result.current.formattedNumber).toBe('+1 (702) 123-4567890');
  });

  it('should filter by regions', () => {
    const { result } = renderHook(() => useMuiPhoneNumber({
      ...defaultProps,
      regions: 'north-america'
    }));
    // north-america should include US, Canada, etc.
    expect(result.current.computedOnlyCountries.every(c => c.regions.includes('north-america'))).toBe(true);
    expect(result.current.computedOnlyCountries.some(c => c.iso2 === 'us')).toBe(true);
    expect(result.current.computedOnlyCountries.some(c => c.iso2 === 'gb')).toBe(false);
  });
});

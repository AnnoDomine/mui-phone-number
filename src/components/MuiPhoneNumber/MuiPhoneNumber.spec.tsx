import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import MuiPhoneNumber from './MuiPhoneNumber';
import React from 'react';

describe('MuiPhoneNumber UI tests', () => {
  const ControlledWrapper = (props: any) => {
    const [value, setValue] = React.useState(props.value || '');
    return <MuiPhoneNumber {...props} value={value} onChange={(v) => { setValue(v as string); props.onChange?.(v); }} />;
  };

  it('should render and allow typing', async () => {
    const user = userEvent.setup();
    render(<ControlledWrapper defaultCountry="us" />);
    
    const input = screen.getByRole('textbox');
    // Using fireEvent.change with the full expected value (including dial code)
    // is often necessary for masked components in tests.
    fireEvent.change(input, { target: { value: '+17021234567' } });
    
    await waitFor(() => expect(input).toHaveValue('+1 (702) 123-4567'), { timeout: 5000 });
  });

  it('should open the country dropdown and select a country', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledWrapper defaultCountry="us" onChange={onChange} />);
    
    const flagButton = screen.getByLabelText('Select country');
    await user.click(flagButton);
    
    // Wait for the menu to be visible and stable
    const germanyItem = await screen.findByText('Germany', { selector: '.country-name' });
    await user.click(germanyItem);
    
    const input = screen.getByRole('textbox');
    await waitFor(() => expect(input).toHaveValue('+49'), { timeout: 5000 });
    expect(onChange).toHaveBeenCalled();
  });

  it('should filter countries in dropdown when typing', async () => {
    const user = userEvent.setup();
    render(<ControlledWrapper defaultCountry="us" />);
    
    const flagButton = screen.getByLabelText('Select country');
    await user.click(flagButton);
    
    // In our component, searching is done via keydown on the document when menu is open
    await user.keyboard('f');
    await user.keyboard('r');
    await user.keyboard('a');
    
    // It should highlight France. 
    await user.keyboard('{Enter}');
    
    const input = screen.getByRole('textbox');
    await waitFor(() => expect(input).toHaveValue('+33'), { timeout: 5000 });
  });

  it('should handle preferred countries correctly', async () => {
    const user = userEvent.setup();
    render(<MuiPhoneNumber defaultCountry="us" preferredCountries={['gb', 'de']} />);
    
    const flagButton = screen.getByLabelText('Select country');
    await user.click(flagButton);
    
    // Preferred countries are rendered at the top. 
    // We expect "United Kingdom" and "Germany" to be there before the divider
    const items = screen.getAllByRole('menuitem');
    expect(items[0]).toHaveTextContent('United Kingdom +44');
    expect(items[1]).toHaveTextContent('Germany +49');
  });
});

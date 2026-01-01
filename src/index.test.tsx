import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import MuiPhoneNumber from './index';

test('renders MuiPhoneNumber component', () => {
  render(<MuiPhoneNumber defaultCountry="us" />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeTruthy();
});

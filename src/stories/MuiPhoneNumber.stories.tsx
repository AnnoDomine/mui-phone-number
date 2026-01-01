import type { Meta, StoryObj } from '@storybook/react';
import MuiPhoneNumber from '../index';

const meta: Meta<typeof MuiPhoneNumber> = {
  title: 'Components/MuiPhoneNumber',
  component: MuiPhoneNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof MuiPhoneNumber>;

export const Default: Story = {
  args: {
    defaultCountry: 'us',
  },
};

export const Italian: Story = {
  args: {
    defaultCountry: 'it',
  },
};

export const ExcludeCountries: Story = {
  args: {
    defaultCountry: 'no',
    excludeCountries: ['us', 'ca'],
  },
};

export const OnlyCountries: Story = {
  args: {
    defaultCountry: 'gb',
    onlyCountries: ['gb', 'es'],
  },
};

export const PreferredCountries: Story = {
  args: {
    defaultCountry: 'it',
    preferredCountries: ['it', 'se'],
  },
};

export const Disabled: Story = {
  args: {
    defaultCountry: 'us',
    disabled: true,
  },
};

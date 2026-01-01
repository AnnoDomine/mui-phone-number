import { Meta, StoryObj } from '@storybook/react';
import { default as MuiPhoneNumber } from '../index';

declare const meta: Meta<typeof MuiPhoneNumber>;
export default meta;
type Story = StoryObj<typeof MuiPhoneNumber>;
export declare const Default: Story;
export declare const Italian: Story;
export declare const ExcludeCountries: Story;
export declare const OnlyCountries: Story;
export declare const PreferredCountries: Story;
export declare const Disabled: Story;

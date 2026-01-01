# mui-phone-number

Highly customizable phone input component for Material UI (MUI) v5+ with auto formatting. Written in TypeScript.

Based on the wonderful [react-phone-input-2](https://github.com/bl00mber/react-phone-input-2) package.

![alt tag](https://media.giphy.com/media/l378A8qFNzgiuPUre/giphy.gif)

Uses `@mui/material/TextField` for rendering the phone input.

## Features
- Material UI v5+ support
- Auto-formatting
- TypeScript support
- Country flags with dropdown
- Searchable country list
- Localization support
- Custom themes support (Emotion)

## Installation

```shell
# using pnpm
pnpm add mui-phone-number

# using npm
npm install mui-phone-number

# using yarn
yarn add mui-phone-number
```

## Usage

```tsx
import MuiPhoneNumber from 'mui-phone-number';

// ...
<MuiPhoneNumber defaultCountry={'us'} onChange={handleOnChange}/>
```

Your handler for the `onChange` event should expect a string as parameter, where the value is that of the entered phone number, and a second parameter with country data.

```tsx
function handleOnChange(value, countryData) {
   console.log('Number:', value);
   console.log('Country data:', countryData);
}
```

## Options
| Name | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `excludeCountries` | `string[]` | array of country codes to be excluded | `['cu','cw','kz']` |
| `onlyCountries` | `string[]` | country codes to be included | `['cu','cw','kz']` |
| `preferredCountries` | `string[]` | country codes to be at the top | `['us','gb']` |
| `defaultCountry` | `string` | initial country code (iso2) | `'us'` |
| `inputClass` | `string` | class for input | |
| `dropdownClass` | `string` | class for dropdown container | |
| `autoFormat` | `boolean` | on/off auto formatting, `true` by default | |
| `disableAreaCodes` | `boolean` | disable local codes for all countries | |
| `disableCountryCode` | `boolean` | disable country code in the input field | |
| `disableDropdown` | `boolean` | disable country selection dropdown | |
| `enableLongNumbers` | `boolean` | allow typing beyond the format | |
| `countryCodeEditable`| `boolean` | allow editing country code | |
| `native` | `boolean` | use native select for dropdown | |

### Regions

You can filter countries by regions or subregions.

```tsx
<MuiPhoneNumber
  defaultCountry='it'
  regions={'europe'}
/>

<MuiPhoneNumber
  defaultCountry='ca'
  regions={['north-america', 'carribean']}
/>
```

Available regions: `['america', 'europe', 'asia', 'oceania', 'africa']`
Available subregions: `['north-america', 'south-america', 'central-america', 'carribean', 'european-union', 'ex-ussr', 'middle-east', 'north-africa']`

### Localization

```tsx
<MuiPhoneNumber
  onlyCountries={['de', 'es']}
  localization={{'Germany': 'Deutschland', 'Spain': 'España'}}
/>
```

### Supported events

`onChange`, `onFocus`, `onBlur`, `onClick`, `onKeyDown`.

The `onChange` handler receives:
1. `value`: `string` - the formatted phone number.
2. `countryData`: `object` - `{ name, dialCode, countryCode }`.

## Development

This project uses `pnpm` and `Vite`.

### Scripts
- `pnpm dev`: Start dev server
- `pnpm build`: Build the library
- `pnpm test`: Run unit tests with Vitest
- `pnpm lint`: Run Biome check
- `pnpm format`: Run Biome format
- `pnpm storybook`: Start Storybook

## License

MIT
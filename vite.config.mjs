/// <reference types="vitest/config" />
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true
  })],
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production')
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MUiPhoneNumber',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lodash', '@mui/material', '@mui/material/TextField', '@mui/material/InputAdornment', '@mui/material/IconButton', '@mui/material/Menu', '@mui/material/Divider', '@mui/material/NativeSelect', '@mui/material/MenuItem', 'clsx', 'prop-types', 'country-flag-icons', 'country-flag-icons/react/3x2'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          lodash: '_',
          '@mui/material': 'MaterialUI',
          '@mui/material/TextField': 'MaterialUI.TextField',
          '@mui/material/InputAdornment': 'MaterialUI.InputAdornment',
          '@mui/material/IconButton': 'MaterialUI.IconButton',
          '@mui/material/Menu': 'MaterialUI.Menu',
          '@mui/material/Divider': 'MaterialUI.Divider',
          '@mui/material/NativeSelect': 'MaterialUI.NativeSelect',
          '@mui/material/MenuItem': 'MaterialUI.MenuItem',
          clsx: 'clsx',
          'prop-types': 'PropTypes',
          'country-flag-icons/react/3x2': 'Flags'
        }
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.js']
      }
    }]
  }
});
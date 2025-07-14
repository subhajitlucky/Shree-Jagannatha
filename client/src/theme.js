import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#fff5e6' },
          100: { value: '#ffe4b5' },
          200: { value: '#ffd485' },
          300: { value: '#ffc355' },
          400: { value: '#ffb224' },
          500: { value: '#ff9933' },
          600: { value: '#cc7a29' },
          700: { value: '#995c1f' },
          800: { value: '#663d14' },
          900: { value: '#331f0a' },
        },
        accent: {
          500: { value: '#4169E1' },
        },
      },
      fonts: {
        heading: { value: `'Playfair Display', serif` },
        body: { value: `'Open Sans', sans-serif` },
      },
    },
  },
});

export default system; 
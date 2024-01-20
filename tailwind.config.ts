import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXL: { max: '1280px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      colors: {
        accent: '#DC2626',
        white: {
          DEFAULT: '#FAFAFA',
          light: '#FAFAFA26',
        },
        dark: '#171717',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        '18/28': ['18px', '28px'],
        '20/28': ['20px', '28px'],
      },
      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        open: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 500ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 500ms cubic-bezier(0.87, 0, 0.13, 1)',
        open: 'open 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
export default config;

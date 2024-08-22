import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#01080E',
        surfacePrimary: '#011627',
        surfaceSecondary: '#011221',
        accent: {
          orange: '#FEA55F',
          green: '#43D9AD',
          red: '#E99287',
          purple: '#C98BDF',
          blue: '#4D5BCE',
        },
        line: '#1E2D3D',
        tPrimary: '#FFFFFF',
        tSecondary: '#607B96',
        iPrimary: '#607B96',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },
      },
      animation: {
        cursor: 'cursor 1s infinite',
        typewriter: 'typewriter 3.5s steps(19) forwards',
        caret: 'typewriter 3.5s steps(19) forwards, blink 1s steps(19) infinite 3.5s',
      },
    },
  },
  plugins: [],
};
export default config;

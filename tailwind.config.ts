import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px', //@media (max-width: 768px)
      xl: '1440px', //@media (max-width: 976px)
    },
    spacing: { '1': '8px', '2': '12px', '3': '6px', '4': '24px', '5': '32px' },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // https://tailwindcss.com/docs/configuration
      colors: {
        vuejs: '#49e659',
      },
    },
  },
  plugins: [],
};
export default config;

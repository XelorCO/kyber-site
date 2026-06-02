import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kyber: {
          bg: '#070711',
          card: 'rgba(255,255,255,0.05)',
        },
      },
    },
  },
  plugins: [],
};

export default config;

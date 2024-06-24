import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background-color': '#030014'
      }
    },
    boxShadow: {
      neon: '0 0 2px #b66df5, 0 0 2px #b66df5, 0 0 2px #b66df5, 0 0 10px #b66df5',
    },
    borderColor: {
      neon: '#b66df5',
    },
    screens: {
      'xm': {'max': '550px'}
    }
  },
  plugins: [],
};
export default config;

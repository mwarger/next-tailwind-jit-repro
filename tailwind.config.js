module.exports = {
  mode: 'jit',
  purge: [
    './apps/next-tailwind/pages/**/*.{js,ts,jsx,tsx}',
    './apps/next-tailwind/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

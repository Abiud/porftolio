/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      margin: {
        '28': '7rem'
      },
      width: {
        '14': '3.5rem',
        '28': '7rem'
      }
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '5': '5%',
      '10': '10%',
      '15': '15%',
      '20': '20%',
      '25': '25%',
      '30': '30%',
      '35': '35%',
      '40': '40%',
      '45': '45%',
      '50': '50%',
      '60': '60%',
      '70': '70%',
      '80': '80%',
      '90': '90%',
      '-4': '-1rem',
      '-8': '-2rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-20': '-5rem',
      '-24': '-6rem',
      '-28': '-7rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },
  },
  variants: {},
  plugins: [],
  important: true
}

/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './main.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  safelist: [
    // My common css classes used throughout the page
    'card',
    'card-bordered',
    'bg-base-100',
    'shadow-lg',
    'hover:shadow-xl',
    'transition-shadow',
    'duration-300',
    'ease-in-out',
    'card-body',
    'p-6',
    'card-title',
    'text-xl',
    'mb-2',
    'font-semibold',
    'mb-1',
    'text-sm',
    'grid',
    'md:grid-cols-2',
    'lg:grid-cols-3',
    'gap-6',
  ],
}


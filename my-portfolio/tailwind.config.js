/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
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
    'gap-6'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["emerald", "dim"],
  },
}


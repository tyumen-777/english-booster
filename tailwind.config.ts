import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1E1E1E',
        'dark-grey': '#4D4D4D',
        'light-grey': '#8B8B93',
        'white': '#FFFFFF',
        'light-purple': '#DAE5FF',
        'purple': '#9EA5FF',
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#FAF8FF',
        'surface-dim': '#ded8e1',
        'surface-container-high': '#ece6f0',
        'surface-container-low': '#f7f2fa',
        'surface-variant': '#e7e0ec',
        'on-surface': '#191b23',
        'on-surface-variant': '#49454f',
        'primary': '#1A56DB',
        'primary-container': '#2563EB',
        'primary-fixed': '#e0e0ff',
        'primary-fixed-dim': '#c1c1ff',
        'secondary': '#625b71',
        'secondary-fixed': '#e8def8',
        'secondary-fixed-dim': '#ccc2dc',
        'tertiary': '#7d5260',
        'tertiary-fixed': '#ffd8e4',
        'tertiary-fixed-dim': '#efb8c8',
        'outline': '#79747e',
        'outline-variant': '#c4c7c5',
        'success': '#059669',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      padding: {
        'margin-mobile': '1rem',
        'margin-desktop': '2rem',
        'stack-lg': '4rem',
      },
      gap: {
        'gutter': '2rem',
      }
    },
  },
  plugins: [],
}
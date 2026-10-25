/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#1c1c1c',
        primary: '#1c1c1c',
        'primary-foreground': '#ffffff',
        secondary: '#e8e8e6',
        'secondary-foreground': '#1c1c1c',
        muted: '#f6f6f4',
        'muted-foreground': '#6b6b6b',
        border: '#e2e2e2',
        'border-dark': '#2b2b2e',
      },
    },
  },
  plugins: [],
};

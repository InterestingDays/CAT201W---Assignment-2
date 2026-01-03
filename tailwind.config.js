/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a',      // 深蓝背景
        'brand-primary': '#6366f1',   // 霓虹紫
        'brand-secondary': '#3b82f6', // 科技蓝
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#1B3C53",
          700: "#234C6A",
          500: "#456882",
        },
        light: "#E3E3E3",
      },
    },
  },
  plugins: [],
};

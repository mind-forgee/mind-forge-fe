/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#125B48",
        accent: "#FCD980",
        secondary: "#013528",
        light: "#F4ECE9",
        dark: "#13120F"
      },
      backgroundImage: {
        register: "url('/images/about.png')",
        login: "url('/images/login.png')",
      }
    },
  },
  plugins: [],
}


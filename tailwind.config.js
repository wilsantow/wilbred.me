typography = require("@tailwindcss/typography");

const base="text-code-";

module.exports = {
  purge: {
    content:[ "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js,ts,jsx,tsx}"],
   
  // These options are passed through directly to PurgeCSS
  options:{
    whitelist: ['text-code-red','text-code-yellow','text-code-green','text-code-white','text-code-purple','text-code-blue','text-gray-400','italic'],
}
},
  theme: {
    extend: {
      colors: {
        code: {
          green: "#b5f4a5",
          yellow: "#ffe484",
          purple: "#d9a9ff",
          red: "#ff8383",
          blue: "#93ddfd",
          white: "#fff",
        },
      },
    },
  },
  variants: {},
  plugins: [typography],
};

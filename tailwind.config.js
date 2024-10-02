/** @type {import('tailwindcss').Config} */

/* CODE FROM https://www.youtube.com/watch?v=MAtaT8BZEAo&t=511s TO BE ABLE TO CHANGE OPACITY ON CUSTOM COLORS*/
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else return `rgba(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: withOpacity("--darkest"),
        dark: withOpacity("--dark"),
        midToneBg: withOpacity("--midtone"),
        midLightBg: withOpacity("--mid-light"),
        darkText: withOpacity("--lightest"),
        accent: withOpacity("--accent"),
      },
      screens: {
        halfXl: "1060px",
      },
    },
  },
  plugins: [require("tailwindcss-primeui", "@tailwindcss/aspect-ratio")],
};

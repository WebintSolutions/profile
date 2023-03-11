module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kievitBook: ["Kievit-Book", "sans-serif"],
        dancingScript: ['Dancing Script', "cursive"],
        titillium: ['Titillium Web', 'sans-serif']
      },
      colors: {
        sixtyPercentColor: "#75555f",
        tenPercentColor: "#af5465",
        thirtyPercentColor: "#22feea",
      },
      textColor: {
        primaryBrightRed: "#F93822FF",
        secondaryCyberYellow: "#FDD20EFF",
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}
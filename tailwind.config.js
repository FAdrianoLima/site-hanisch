module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#322783",
        secondary: "#4481ff",
      },
      zIndex: { 9999: "9999" },
    },
    fontFamily: {
      body: ['Montserrat'],
    },
  },
  plugins: [],
};

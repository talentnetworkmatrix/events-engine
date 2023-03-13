module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/default.jpeg')"
      },
    },
  },
  plugins: [],
  corePlugins : {
    transitionWidth: true,
  },
};

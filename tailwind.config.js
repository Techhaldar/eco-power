// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // 👈 sirf aadha slide
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite", // speed adjust kar sakte ho
      },
    },
  },
  plugins: [],
  base: '/eco-power'
};

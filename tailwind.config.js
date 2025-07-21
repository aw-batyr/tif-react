/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#336940",
        reverse_primary: "#9AD4A1",
        primary_03: "#F6B2B8",
        primary_04: "#9AD4A1",
        primary_09: "#99101D",
        primary_outline_reverse: "#EE6572",
        on_primary: "#ffffff",
        primary_container: "#F6B2B8",
        on_primary_container: "#112343",

        surface_container: "#EBEFE7",

        surface_bg: "#F6FBF2",

        secondary: "#495F89",
        on_secondary: "#ffffff",
        secondary_container: "#D3E8D2",
        on_secondary_container: "#394B3B",

        teritary: "#39656D",
        on_teritary: "#ffffff",
        teritary_container: "#FFDDBA",
        on_teritary_container: "#2B1700",
        teritary_04: "#FFCE7F",
        teritary_07: "#FF9E00",
        teritary_08: "#D48400",
        teritary_11: "#553400",
        teritary_surface_container: "#FFF3E0",

        surface_high: "#E8E7EF",
        on_surface: "#181D18",
        on_surface_v: "#414941",

        outline: "#A1A7B2",
        outline_v: "#D0D3D8",
        background: "#F9F9FA",

        gray_10: "#433C3D",
        gray_09: "#595051",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

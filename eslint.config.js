import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      tailwindcss,
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      tailwindcss: {
        config: "tailwind.config.js",
      },
    },
  },
];

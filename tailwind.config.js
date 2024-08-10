/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.ejs",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Noto Sans TC", "sans-serif"],
      newsreader: "Newsreader",
    },

    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      animation: ["motion-safe"],
      colors: {
        primary: {
          DEFAULT: "#569573",
          dark: "#457662",
        },
      },
      borderColor: {
        DEFAULT: "#ADB5BD", // 设置默认的边框颜色
      },
      backgroundImage: {
        banner:
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner.png?raw=true')",
        "banner-sm":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner-sm.png?raw=true')",
        "article-banner-sm":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/article-banner-sm.png?raw=true')",
        "article-banner":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/article-banner.png?raw=true')",
        "about-banner-sm":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/about-banner-sm.png?raw=true')",
        "about-banner":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/about-banner.png?raw=true')",
      },
    },
  },
};

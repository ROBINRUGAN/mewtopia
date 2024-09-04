/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // 如果有根目录下的index.html
    "./src/**/*.{js,ts,jsx,tsx}", // 扫描src目录下所有的JavaScript、TypeScript、JSX、TSX文件
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#34d399",
          secondary: "#38bdf8",
          accent: "#c084fc",
          // neutral: "#fcd34d",
          "base-100": "#f3f4f6",
          info: "#7dd3fc",
          success: "#6ee7b7",
          warning: "#fde68a",
          error: "#f87171",
        },
      },
    ],
  },
};

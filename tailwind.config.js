/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            backgroud: "#004d66",
            button: "#36c978",
            cyan: "hsl(180,66%,49%)",
            violet: "hsl(257,27%,26%)",
            Darkviolet: "hsl(268,8%,14%)",
         },
      },
   },
   plugins: [],
};

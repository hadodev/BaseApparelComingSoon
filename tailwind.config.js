/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        clrRed: {
          desaturated: "hsl(0, 36%, 70%)",
          soft: "hsl(0, 93%, 68%)",
          darkGrayish: "hsl(0, 6%, 24%)",
        },
        clrGradient1: {
          from: "hsl(0, 0%, 100%)",
          to: "hsl(0, 100%, 98%)",
        },
        clrGradient2: {
          from: "hsl(0, 80%, 86%)",
          to: "hsl(0, 74%, 74%)",
        },
      },

      backgroundImage: ({ theme }) => ({
        "image-gradient-135deg":
          "linear-gradient(135deg, var(--tw-gradient-stops))",
      }),

      fontFamily: {
        display: '"Josefin Sans", sans-serif',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red':'hsl(0, 78%, 62%)',
        'primary-cyan':'hsl(180, 62%, 55%)',
        'primary-orange':'hsl(34, 97%, 64%)',
        'primary-blue':'hsl(212, 86%, 64%)',
        'neutral-verydarkblue':'hsl(234, 12%, 34%)',
        'neutral-grayishblue':'hsl(229, 6%, 66%)',
        'neutral-verylightgray':'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
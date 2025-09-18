/**** Tailwind config with TED-inspired palette ****/
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          deep: "#C1121F",
        },
        charcoal: "#1A1A1A",
        beige: {
          DEFAULT: "#F5F3ED",
          warm: "#F1EDE5",
        },
        offwhite: "#FFFFFF",
      },
      fontFamily: {
  display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 0 0 2px rgba(193,18,31,0.5)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 800ms ease-out both',
      },
    },
  },
  plugins: [],
};

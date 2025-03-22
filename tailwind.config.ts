import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0E1836", // Navy blue/dark blue (main background)
          light: "#1D2C59",
          dark: "#050A1A",
        },
        secondary: {
          DEFAULT: "#F5F5F5", // Light gray
          light: "#FFFFFF",
          dark: "#E0E0E0",
        },
        accent: {
          DEFAULT: "#F7B932", // Gold/amber
          light: "#FFCD54",
          dark: "#E6A01E",
        },
        action: {
          DEFAULT: "#4D96FF", // Light blue for CTAs
          light: "#75AFFF",
          dark: "#3C7FDB",
        },
        red: {
          DEFAULT: "#E84C3D", // Red (for donate button)
          light: "#EC6A5D",
          dark: "#D43C2D",
        },
        charcoal: {
          DEFAULT: "#4A4A4A",
          light: "#6A6A6A",
          dark: "#333333",
        },
        // Additional utility colors
        "navy-gray": {
          DEFAULT: "#343B64", // Navy with gray tint (for alternate sections)
          light: "#454C7A",
          dark: "#252A47",
        },
        gray: {
          100: "#F7F7F7",
          200: "#E6E6E6",
          300: "#D5D5D5",
          400: "#B3B3B3",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [
    // @ts-ignore - Tailwind plugin types
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'var(--secondary)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'var(--primary)',
            borderRadius: '3px',
          }
        }
      }
      addUtilities(newUtilities, ['responsive']);
    }
  ],
};
export default config;

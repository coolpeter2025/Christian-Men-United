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
          DEFAULT: "#007D8F", // Teal
          light: "#23A5B9",
          dark: "#00606D",
        },
        secondary: {
          DEFAULT: "#F5F5F5", // Light Gray
          light: "#FFFFFF",
          dark: "#E0E0E0",
        },
        accent: {
          DEFAULT: "#8C1C13", // Burgundy
          light: "#A82923",
          dark: "#70150E",
        },
        charcoal: {
          DEFAULT: "#2F3542",
          light: "#3D4455",
          dark: "#1E232D",
        },
        // Additional accent colors
        sand: {
          DEFAULT: "#E6DDD6",
          light: "#F1EAE6",
          dark: "#D5C8BE",
        },
        mint: {
          DEFAULT: "#B8E0D2",
          light: "#D2EDE5",
          dark: "#95C8B9",
        },
        // Legacy colors for compatibility
        "primary-dark": "#00606D", // For consistency
        "secondary-light": "#F8F8F8", // For consistency
        highlight: {
          DEFAULT: "#23A5B9", // Now using teal-light as highlight
          light: "#4FBFCF",
          dark: "#00606D",
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

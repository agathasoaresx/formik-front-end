/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#F3F4F7',
        primary: {
          50: "#E7FAF2",
          100: "#B5F0D7",
          200: "#92E9C3",
          300: "#60E0A8",
          400: "#41D997",
          500: "#11D07D",
          600: "#0FBD72",
          700: "#0C9459",
          800: "#097245",
          900: "#075735",
        },
        secondary: {
          50: "#E6E6EB",
          100: "#B0B1C0",
          200: "#8A8BA2",
          300: "#545677",
          400: "#33355D",
          500: "#000334",
          600: "#00032F",
          700: "#000225",
          800: "#00021D",
          900: "#000116",
        },

        tertiary: {
          50: "#F5FEE8",
          100: "#E8FBC4",
          200: "#D8FA9D",
          300: "#C8F773",
          400: "#BCF450",
          500: "#B1F128",
          600: "#A7DE1E",
          700: "#9AC70B",
          800: "#8CAF00",
          900: "#778700",
        },

        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },

        red: "#E12C00",
        yellow: "#EBE900",
        green: "#11D17E",
        blue: "#004EEB",
        purple: "#D422E1",
        darkBlue: "#0E0E76",
        greenLeaf: "#8DBE24",
        lightRed: "#F76C4C",
        pink: "#D12460",
        lightGreen: "#B1F128",
        seaBlue: "#006CC3",
        orange: "#F47100",
        logo: "#EEBD00",
        lightGray: "#E6E6E6", 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'shadowSuave': '0px 4px 16px 0px rgba(0, 0, 0, 0.03)'
      }
    },
  },
  plugins: [],
}

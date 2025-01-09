/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant paths to scan for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Modern green for primary elements
        accent: "#FF9800",  // Warm orange for accents
        neutral: {
          light: "#F5F5F5", // Light gray for background sections
          DEFAULT: "#E0E0E0", // Default neutral for components
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Elegant font for headings
        body: ["Roboto", "sans-serif"],    // Clean font for body text
      },
    },
  },
  plugins: [],
}


/* eslint-disable */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        light: "#f6f7f9",
        silver: "#e5e7eb",
        dark: "#1b3a57",
        primary: "#ffcb2c",
        secondary: "#1a73e8",
        danger: "#881817",
        success: "#28a745",
        warning: "#ffc107",
        navy: {
          10: "#f6f7f9",
          20: "#e5eaf0",
          30: "#d4dce7",
          40: "#c3cfdd",
          50: "#b2c1d4",
          100: "#8ea1b9",
          200: "#6b829d",
          300: "#476282",
          400: "#385574",
          500: "#2a4865",
          600: "#1b3a57",
          700: "#0c2d48",
          800: "#051e34",
          900: "#031525",
          default: "#1b3a57",
        }
      },  
      fontSize: {
        title: '2rem',
      },
      minHeight: {
        "17": "4.25rem",
        "18": "4.5rem",
      },
      maxWidth: {
        "16": "4rem",
        "64": "16rem",
        "screen-60": "60vw",
        "screen-80": "80vw",
      }
    },
  },
};

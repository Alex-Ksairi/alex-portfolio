import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2563EB",
                    dark: "#1D4ED8",
                    light: "#60A5FA",
                },

                secondary: {
                    DEFAULT: "#0F172A",
                    light: "#334155",
                },

                accent: {
                    DEFAULT: "#14B8A6",
                },

                background: "#F8FAFC",
            },

            fontFamily: {
                sans: [
                    "Inter",
                    "sans-serif"
                ],
            },
        },
    },

    plugins: [forms],
};

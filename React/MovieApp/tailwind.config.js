/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#aa3bff',
                secondary: '#16171d',
                accent: '#c084fc',
            },
        },
    },
    plugins: [],
}

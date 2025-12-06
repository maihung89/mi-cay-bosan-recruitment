/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF4500',
                accent: '#FFD700',
                'text-dark': '#333333',
            },
            fontFamily: {
                sans: ['Be Vietnam Pro', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

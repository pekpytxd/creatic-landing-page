/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                defaultBlue: '#6D95FC',
            },
            backgroundImage: {
                'blue-to-transparent-80': 'linear-gradient(to right, rgba(109, 149, 252, 0) 68%, #6D95FC 200%)'
            }
        },
    },
    plugins: [],
}
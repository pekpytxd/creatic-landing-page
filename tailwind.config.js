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
                'blue-to-transparent-80': 'linear-gradient(to right, rgba(109, 149, 252, 0) 65%, #6D95FC 180%)',
                'transparent-to-blue': 'linear-gradient(to left, rgba(109, 149, 252, 0) 68%, #6D95FC 180%)',
                'blue-to-almost-transparent': 'linear-gradient(to right, rgba(109, 149, 252, 0) 50%, #6D95FC 500%)',
                'right-left-to-almost-transparent': 'linear-gradient(to left, rgba(109, 149, 252, 0) 65%, #6D95FC 500%)',
                'left-right-to-almost-transparent': 'linear-gradient(to right, rgba(109, 149, 252, 0) 65%, #6D95FC 500%)',
                'bottom-top-to-almost-transparent': 'linear-gradient(to top, rgba(109, 149, 252, 0) 45%, #6D95FC 500%)',
                'top-bottom-to-almost-transparent': 'linear-gradient(to bottom, rgba(109, 149, 252, 0) 45%, #6D95FC 500%)'
            }
        },
    },
    plugins: [],
}
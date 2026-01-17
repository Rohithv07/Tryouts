/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                accent: 'var(--accent)',
            }
        },
    },
    plugins: [],
}

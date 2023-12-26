/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    extend: {
        colors: {
            primary: '#4b4efc',
            secondary: '#9EAFFF'
        }
    },
    },
    plugins: [require("daisyui")],
}


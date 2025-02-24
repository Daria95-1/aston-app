/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        screens: {
            mobile: '560px',
            tablet: '1024px',
            desktop: '1536px',
        },
    },
    // corePlugins: {
    //     float: true,
    //     clear: true,
    //     gap: true,
    //     margin: true,
    //     padding: true
    // },
}

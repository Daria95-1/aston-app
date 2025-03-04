/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        backgroundImage: {
            'empty-favorites': "url('/src/image/empty-favorites.svg')",
            '404': "url('/src/image/404.svg')",
        },
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

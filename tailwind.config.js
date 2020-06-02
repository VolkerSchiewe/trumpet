module.exports = {
    purge: {
        content: [
            './components/**/*.tsx',
            './pages/**/*.tsx',
        ],
        options: {
            whitelist: [
                //Needed for ContentBlock component
                "text-blue", "text-yellow", "text-magenta", "text-green", "border-blue", "border-yellow",
                "border-magenta", "border-green", "hover:bg-blue", "hover:bg-yellow", "hover:bg-magenta",
                "hover:bg-green"
            ],
        }
    },

    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Sans', 'sans-serif'],
                'sans-content': ['Fira Sans Condensed', 'sans-serif'],
            },
            colors: {
                blue: "#0097dc",
                yellow: "#f19938",
                green: "#00c835",
                magenta: "#f00079"
            }
        }
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'group-hover']
    },
    plugins: [],
}
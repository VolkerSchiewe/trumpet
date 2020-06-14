module.exports = {
    purge: {
        content: [
            './components/**/*.tsx',
            './pages/**/*.tsx',
        ],
        options: {
            whitelist: [
                //Needed for ContentBlock & Orchestra component
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
                blue: {
                    default: "#0097dc",
                    dark: "#0078d2"
                },
                yellow: "#f19938",
                green: "#00c835",
                magenta: "#f00079",
                gray: {
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                }
            },
            strokeWidth: {
                '075': '0.75',
            },
            fill: theme => ({
                "none": "none",
                "gray": theme('colors.gray.500')
            })
        }
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        zIndex: ['responsive', 'hover'],
    },
    plugins: [],
}
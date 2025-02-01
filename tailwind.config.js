module.exports = {
    content: ["./build/*.html", "./build/js/*.js"],
    theme: {
        container: {
            padding: {
                DEFAULT: 'min(5em, 8%)',
            },
        },
        screens: {
            // my_settings
            xs: '499.99px',
            sm: '767.99px',
            md: '991.99px',
            lg: '1199.99px',
            xl: '1439.99px',

            'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
            'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
        },
        fontFamily: {
            primary: 'DM Serif Display , serif',
            secondary: 'Plus Jakarta Sans, sans-serif',
        },
        extend: {
            aspectRatio: {
                '9/16': '9 / 16',
            },
            backgroundImage: {
                hero: 'url(../img/hero/bg.jpg)',
                grid: 'url(../img/grid.png)',
                test: 'url(../img/subscribe.png)',
                dropdown: "url('../img/icons/arrows/dropdown.svg')",
                bg_colors: "url(../img/bg/gradient_orange_teal.svg)",
                bg_wedding: "url(../img/bg/gradient_wedding.svg)",
                bg_gradient: "url(../img/bg/gradient-2.svg)",
            },

            backgroundColor: {},

            colors: {
                concrete: '#C5BAAA',
                craft: '#806D61',
                brightBrick: '#EE7828',
                graphite: '#2C2C2C',
                blueviolet: '#5027B5',

                primary: {
                    DEFAULT: '#292f36',
                    hover: '#343e4a',
                },
                secondary: '#4d5053',
                accent: {
                    DEFAULT: '#cda244',
                    secondary: '#f4f0ec',
                    hover: '#b88c5d',
                },
                minimalism: {
                    first: '#F5F5DC',
                    second: '#D3D3D3',
                    third: '#FFFFFF',
                },
                bright_accents: {
                    fourth: '#FF4500',
                    fifth: '#FFA500',
                    sixth: '#1E90FF',
                },
                pastel: {
                    seventh: '#98FF98',
                    eighth: '#E6E6FA',
                    ninth: '#FFD1DC',
                    kyth: '#03cc65',
                    myth: '#d7d7d7',
                },
                saturated: {
                    tenth: '#006400',
                    eleventh: '#800000',
                    twelfth: '#000080',

                },
                trands2025: {
                    DEFAULT: '#76079B',
                    hover: '#9B7607',
                    active: '#079B76',
                    one: '#CC04AF',
                    two: '#A504C3',
                    three: '#12B8C5',
                    four: '#0DCA06',
                    five: '#CCC302',
                },


            },
            keyframes: {
                'fade-in': {
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                }
            },
            animation: {
                fadeIn: '.3s fade-in ease-in-out'
            }
        },
    },

    plugins: [
        'tailwindcss',
        'tailwind-fmt',
        'autoprefixer',
        'prettier-plugin-tailwindcss',
        'postcss',
        require("@tailwindcss/forms"),
    ],
}


const withPWA = require('next-pwa')
const webpack = require('webpack');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV !== 'production',
    },
    webpack: (config) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.RECAPTCHA_KEY': JSON.stringify(process.env.RECAPTCHA_KEY),
            })
        );

        return config;
    },
})
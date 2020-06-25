const withPWA = require('next-pwa')
const withSourceMaps = require('@zeit/next-source-maps')()
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

const webpack = require('webpack');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const {
    SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    NODE_ENV,
} = process.env


module.exports = withSourceMaps(withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV !== 'production',
    },
    webpack: (config, options) => {
        if (!options.isServer) {
            config.resolve.alias['@sentry/node'] = '@sentry/browser'
        }
        if (
            SENTRY_DSN &&
            SENTRY_ORG &&
            SENTRY_PROJECT &&
            SENTRY_AUTH_TOKEN &&
            NODE_ENV === 'production'
        ) {
            config.plugins.push(
                new SentryWebpackPlugin({
                    include: '.next',
                    ignore: ['node_modules'],
                    urlPrefix: '~/_next',
                    release: options.buildId,
                    setCommits: {
                        auto: true
                    }
                })
            )
        }
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.RECAPTCHA_KEY': JSON.stringify(process.env.RECAPTCHA_KEY),
                'process.env.RESTRICT_FEATURES': JSON.stringify(process.env.RESTRICT_FEATURES),
                'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
            })
        );

        return config;
    },
}))
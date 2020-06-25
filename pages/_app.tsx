import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {AppProps} from "next/app";
import {useEffect} from "react";
import * as React from "react";
import 'tailwindcss/tailwind.css'
import '@brainhubeu/react-carousel/lib/style.css';
import theme from "../src/components/styles/theme";
import * as Sentry from '@sentry/node'

Sentry.init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: process.env.SENTRY_DSN,
})

function MyApp({Component, pageProps, err}: AppProps & { err: Error }) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} err={err}/>;
        </ThemeProvider>
    )
}

export default MyApp
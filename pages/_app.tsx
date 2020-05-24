import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {AppProps} from "next/app";
import Head from "next/head";
import * as React from "react";
import 'tailwindcss/tailwind.css'
import theme from "../components/theme";

function MyApp({Component, pageProps}: AppProps) {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);
    return (
        <>
            <Head>
                <title>Brüderischer Bläsertag 2021 in Berlin</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
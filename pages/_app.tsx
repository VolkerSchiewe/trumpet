import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {AppProps} from "next/app";
import * as React from "react";
import 'tailwindcss/tailwind.css'
import '@brainhubeu/react-carousel/lib/style.css';
import theme from "../src/components/styles/theme";

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
            {/*<Head><title></title></Head>*/}
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
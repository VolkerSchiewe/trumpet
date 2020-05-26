import {ServerStyleSheets} from "@material-ui/styles";
import React from "react";
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang={"de"}>
                <Head>
                    <meta name="description" content="Brüderischer Bläsertag 2021 Berlin"/>

                    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#f19938"/>
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="theme-color" content="#ffffff"/>

                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};

export default MyDocument
import {Container} from "@material-ui/core";
import * as React from 'react'
import Head from 'next/head'

type Props = {
    title?: string
}

const Layout: React.FC<Props> = ({children, title = 'Brüderischer Bläsertag 2021 Berlin'}) => (
    <div style={{
        background: 'linear-gradient(180deg, #ffffff 50%, #cacaca 100%)',
        margin: 0,
        backgroundRepeat: 'no-repeat',
    }}>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            {/*   Add Navigation here*/}
        </header>
        <style global jsx>
            {`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div,
                div#__next > div > div {
                    min-height: 100vh;
                }
        `}
        </style>
        <Container>
            {children}
        </Container>
        <footer>
            {/* Add footer here*/}
        </footer>
    </div>
)

export default Layout

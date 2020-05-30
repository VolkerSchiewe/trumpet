import * as React from 'react'
import Head from 'next/head'

type Props = {
    title?: string
}

const Layout: React.FC<Props> = ({children, title = 'Brüderischer Bläsertag 2021 Berlin'}) => (
    <div style={{
        height:'100%',
        // background: 'linear-gradient(180deg, #ffffff 0%, #cacaca 100%)'
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
                    height: 100%;
                }
        `}
        </style>
        {children}
        <footer>
            {/* Add footer here*/}
        </footer>
    </div>
)

export default Layout

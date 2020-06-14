import {Container} from "@material-ui/core";
import * as React from 'react'
import Head from 'next/head'

type Props = {
    title?: string
}

const Layout: React.FC<Props> = ({children, title = 'Brüderischer Bläsertag 2021 Berlin'}) => (
    <div className='flex flex-col' style={{
        // helps to show contrast ratio in dev environment
        backgroundImage: process.env.NODE_ENV === 'development' ? '': 'linear-gradient(180deg, #ffffff 50%, #cacaca 100%)',
        backgroundRepeat: 'no-repeat',
        margin: 0,
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
                div#__next > div {
                    min-height: 100vh;
                }
        `}
        </style>
        <Container className='flex flex-col mb-5' maxWidth={'xl'}>
            {children}
        </Container>
        <div className='flex-grow'/>
        <footer className="p-3 bg-gray-600 text-gray-100 text-xs">
            © 2020 Evangelische Brüdergemeine Berlin
        </footer>
    </div>
)

export default Layout

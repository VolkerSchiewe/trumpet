import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    title?: string
}

const Layout: React.FC<Props> = ({children, title = 'Brüderischer Bläsertag 2021 Berlin'}) => (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <title>{title}</title>
            <meta name="description" content="Brüderischer Bläsertag 2021 Berlin"/>

            <link rel="manifest" href="manifest.json"/>
            <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76"
                  href="/icons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114"
                  href="/icons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120"
                  href="/icons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144"
                  href="/icons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152"
                  href="/icons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180"
                  href="/icons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"
                  href="/icons/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32"
                  href="/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96"
                  href="/icons/favicon-96x96.png"/>
            <link rel="icon" type="image/png"
                  sizes="16x16"
                  href="/icons/favicon-16x16.png"/>
            <meta name="theme-color" content="#2F3BA2"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="images/icons/ms-icon-144x144.png"/>
        </Head>
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/registration">
                    <a>Registration</a>
                </Link>{' '}
            </nav>
        </header>
        {children}
        <footer>
            <hr/>
            <span className={"bg-blue-500"}>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout

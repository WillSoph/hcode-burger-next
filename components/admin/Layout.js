import styles from './Layout.module.css'
import Head from 'next/head'
import Header from "./Header"
import Footer from "./Footer"
import { useState } from 'react'

export default function Layout({ children }) {

    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <>
            <Head>
                <title>HCode Burger</title>
                <link rel="icon" href="/favicon-16x16.png" />
            </Head>
            <div className={[styles.content, menuOpened ? styles.open : ''].join(' ')}>

                <Header onMenuToggle={menuState => setMenuOpened(menuState)} />

                <main className={styles.main}>

                    {children}

                </main>

                <Footer menuState={menuOpened} />

            </div>
        </>
    )

}
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <Head>
                <title>HCode Burger - Quem Somos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <p>Essa é a página Quem Somos</p>
            <Footer />
        </>
    )
}
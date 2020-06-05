import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cardapio() {
    return (
        <>
            <Head>
                <title>HCode Burger - Cardápio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <p>Essa é a página de Cardápio</p>
            <Footer />
        </>
    )
}
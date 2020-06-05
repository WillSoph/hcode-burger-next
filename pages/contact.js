import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <>
            <Head>
                <title>HCode Burger - Contato</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <p>Essa é a página De Formulário de Contato</p>
            <Footer />
        </>
    )
}
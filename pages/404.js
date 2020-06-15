import Head from 'next/head'
import HeaderTopo from '../components/HeaderTopo'
import HeaderAbout from '../components/HeaderAbout'
import Footer from '../components/Footer'
import Menu from '../components/MenuMobile'
import Header404 from '../components/Header404'
import styles from '../components/Error.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>HCode Burger - Quem Somos</title>
                <link rel="icon" href="/favicon-16x16.png" />
            </Head>
            <div id={styles['menu-mobile']}>
                <Menu />
            </div>
            <HeaderTopo />
            <Header404 />
            <section className={styles.section}>
                <div className={styles['error-rotas']}>
                    <h2>Nossos entregadores não encontraram o seu pedido. Escolha outra rota por favor.</h2>
                </div>


            </section>
            <Footer />
        </>
    )
}
import Head from 'next/head'
import HeaderAbout from '../components/HeaderAbout'
import Footer from '../components/Footer'
import styles from '../components/About.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>HCode Burger - Quem Somos</title>
                <link rel="icon" href="/favicon-16x16.png" />
            </Head>

            <HeaderAbout />
            <section>
                <div className={styles['primeira-parte']}>

               
                    <div className={styles.corte}>
                        <img src="assets/images/hamburguer-about-us.png" alt="hamburguer" />
                    </div>

                    <div className={styles.chef}>
                        <h2>The Bispinho</h2>
                        <h3> HCODE Burger's Chef</h3><br></br>

                        <p> Gabriel Bispo ou "Bispinho", autodidata, transformou a paixão pela cozinha em profissão. Mais do que alguém responsável pela elaboração do cardápio, preparação dos pratos e combinação dos sabores, o chef é a alma da Hcode Burguer. Há sempre um grande chef por trás de um grande restaurante.
                   </p><br/> 

                        <p>Fundada na crença de que todos merecem um lugar onde podem escapar das complicações do mundo atual, HCODE Burger abriu seu primeiro restaurante em 6 de junho de 1996 na icônica Avenida Paulista em São Paulo. Nós nos inspiramos nas cozinhas e cultura de todo o mundo, mantendo-se fiel aos clássicos.
                        </p>


                    </div>
                    <div className={styles.chef1}>
                        <img src="assets/images/Chefs-phto-signature.png" alt="Chefe-Bispinho" />
                    </div>

                    </div>
                


                <div className={styles.galeria}>


                    <div className={styles.text}>
                        <h2>NOSSAS UNIDADES</h2>
                    </div>

                    <div className={styles.fotos}>


                        <div className={styles.container}>
                            <img src="assets/images/gallery/zhanjiang-chen-Wg-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>SÃO PAULO   SP</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/christian-chen-OrVTjVKsYQA-unsplash-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>RIO DE JANEIRO RJ</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/toa-heftiba-2.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>CURITIBA PR</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/toa-heftiba-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>VITÓRIA ES</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/marco-chilese-Gprl-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>BELO HORIZONTE MG</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/jana-sabeth-k-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>SALVADOR BA</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/patrick-tomasso-GXXYkSwndP-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>SÃO BERNARDO SP</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/priscilla-du-preez-W-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>NEW YORK  USA</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/shawn-ang-nmpW_WwwVSc-unsplash-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>LOS ANGELES USA</div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <img src="assets/images/gallery/zhanjiang-chen-Wg-1.png" alt="" />
                            <div className={styles.overlay}>
                                <div className={styles.hover}>PARIS FR</div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <Footer />
        </>
    )
}
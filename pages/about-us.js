import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/About.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>HCode Burger - Quem Somos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <section>
                <div class={styles['primeira-parte']}>
                    <div class={styles.corte}>
                        <img src="assets/images/hamburguer-about-us.png" alt="hamburguer" />
                    </div>

                    <div class={styles.chef}>
                        <h2>NOME DO CHEF</h2>
                        <h3>O CHEF TABLE</h3>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea quia unde libero, beatae deserunt,
                        cum placeat neque tenetur expedita dicta eaque accusamus ut aperiam hic at dignissimos nisi non.
                   

                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                facilisis.
                        </p>

             
                    </div>
                            <div class={styles.chef1}>
                                <img src="assets/images/Chefs-phto-signature.png" alt="Chefe-Bispinho" />
                            </div>
                </div>


                        <div class={styles.galeria}>


                            <div class={styles.text}>
                                <h2>NOSSAS UNIDADES</h2>
                            </div>

                            <div class={styles.fotos}>
                                <div>
                                    <img src="assets/images/gallery/daan-evers-tKN-1.png" alt="" />
                                </div>

                                <div>
                                    <img src="assets/images/gallery/zhanjiang-chen-Wg-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/christian-chen-OrVTjVKsYQA-unsplash-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/toa-heftiba-2.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/toa-heftiba-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/marco-chilese-Gprl-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/jana-sabeth-k-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/patrick-tomasso-GXXYkSwndP-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/priscilla-du-preez-W-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="assets/images/gallery/shawn-ang-nmpW_WwwVSc-unsplash-1.png" alt="" />
                                </div>
                            </div>

                        </div>
    </section>
                    <Footer />
        </>
    )
}
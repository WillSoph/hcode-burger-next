import Head from 'next/head'
import HeaderCardapio from '../components/HeaderCardapio'
import Footer from '../components/Footer'
import styles from '../components/Cardapio.module.css'

export default function Cardapio() {
    return (
        <>
            <Head>
                <title>HCode Burger - Cardápio</title>
                <link rel="icon" href="/favicon-16x16.png" />
            </Head>

            <HeaderCardapio />

            <section>
                <div className={styles['sub-text']}>
                    <h2>
                        Encontre o seu lanche preferido
            </h2>
                </div>


                <div className={styles.burguer}>

                    <div>
                        <img src="assets/images/hamburguer-desktop.png" alt="Burger-Bacon" />
                    </div>
                    <div className={styles.text}>
                        <h2>LANÇAMENTO:</h2>
                        <h3>BACON LOVERS</h3>
                        <p>Deliciosas fatias de bacon com queijo cheddar, alface,
                    tomate e nosso hamburguer de picanha com bacon com o tempero secreto do chefHat</p>

                    </div>
                </div>


                <div className={styles.cardapio}>

                    <div>
                        <img src="assets/images/ocean-breeze.png" alt="Cardapio-Ocean Breeze" />
                        <h3>Ocean Breeze</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur esse adipisci
                            mollitia sunt beatae reprehenderit, earum temporibus quas. Facilis nihil dolor optio doloremque
                            saepe totam, laborum mollitia vel voluptatibus.
                </p>
                    </div>
                    <div>
                        <img src="assets/images/chicken-crispy.png" alt="Cardapio-Chicken Crispye" />
                        <h3>Chicken Crispye</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur esse adipisci
                            mollitia sunt beatae reprehenderit, earum temporibus quas. Facilis nihil dolor optio doloremque
                            saepe totam, laborum mollitia vel voluptatibus.
                </p>
                    </div>
                    <div>
                        <img src="assets/images/melted-salad.png" alt=" Cardapio-Melted Salad" />
                        <h3>Melted Salad</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur esse adipisci
                            mollitia sunt beatae reprehenderit, earum temporibus quas. Facilis nihil dolor optio doloremque
                            saepe totam, laborum mollitia vel voluptatibus.
                </p>
                    </div>
                    <div>
                        <img src="assets/images/black-pearl.png" alt="Cardapio-Black pear" />
                        <h3>Black pearl</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur esse adipisci
                            mollitia sunt beatae reprehenderit, earum temporibus quas. Facilis nihil dolor optio doloremque
                            saepe totam, laborum mollitia vel voluptatibus.
                </p>
                    </div>
                    <div>
                        <img src="assets/images/double-double.png" alt="Cardapio-Double Double" />
                        <h3>Double Double</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur esse adipisci
                            mollitia sunt beatae reprehenderit, earum temporibus quas. Facilis nihil dolor optio doloremque
                            saepe totam, laborum mollitia vel voluptatibus.
                </p>
                    </div>
                    <div>
                        <img src="assets/images/monster.png" alt="Cardapio-Monster" />
                        <h3>Monster</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur esse adipisci
                            mollitia sunt beatae reprehenderit, earum temporibus quas. Facilis nihil dolor optio doloremque
                            saepe totam, laborum mollitia vel voluptatibus.
                </p>
                    </div>
                </div>

                <div className={styles['sub-text']}>
                    <h2>
                        Acompanhamentos para compartilhar, <b>ou não!</b>
                    </h2>
                </div>

                <div className={styles.acompanhamentos}>

                    <div>
                        <img src="assets/images/les-fries.png" alt="acompanhamentos-fritas" />
                        <h3>Les Fries</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi culpa non corrupti laborum
                            blanditiis similique, officiis, molestias est odio harum quisquam qui quos eligendi illo aliquid
                            veniam architecto. Accusantium!
                </p>
                    </div>
                    <div>
                        <img src="assets/images/chicken-bites.png" alt="acompanhamentos-bites" />
                        <h3>Chicken biter</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos accusantium nisi rem vitae at,
                            repellat minima veniam quo dolore maxime eius corrupti asperiores officiis impedit dolorem, vel
                            voluptatibus, ducimus architecto!
                </p>
                    </div>
                    <div>
                        <img src="assets/images/onions.png" alt="acompanhamentos-monster" />
                        <h3>Monster</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis debitis aliquam!
                            Minima dolorum ullam commodi vitae laboriosam, nemo veniam explicabo sequi modi magni voluptatem
                            dignissimos deserunt, distinctio quam unde.
                </p>
                    </div>

                </div>

                <div className={styles.combo}>


                    <h3>Transforme seu lanche em um <br></br>
                        <b>COMBO</b></h3>

                    <img src="assets/images/combo.png" alt="Combo" />



                </div>
            </section>



            <Footer />
        </>
    )
}
import Head from 'next/head'
import HeaderCardapio from '../components/HeaderCardapio'
import Footer from '../components/Footer'
import styles from '../components/Cardapio.module.css'
import Menu from '../components/MenuMobile'
import HeaderTopo from '../components/HeaderTopo'

export default function Cardapio() {
    return (
        <>
            <Head>
                <title>HCode Burger - Cardápio</title>
                <link rel="icon" href="/favicon-16x16.png" />
            </Head>
            <div id='menu-mobile'>
                <Menu />
            </div>
            <HeaderTopo />

            <HeaderCardapio />

            <section>
                <div className={styles.backburguer}>

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
                        tomate e nosso hambúrguer de picanha com o tempero secreto do Hcode Burger</p>

                        </div>
                    </div>

                </div>

                <div className={styles.cardapio}>

                    <div>
                        <img src="assets/images/ocean-breeze.png" alt="Cardapio-Ocean Breeze" />
                        <h3>Ocean Breeze</h3>
                        <p>
                            Sinta a brisa do oceano com nosso hamburguer de salmão, tomate, alface e maionese da casa
                </p>
                    </div>
                    <div>
                        <img src="assets/images/chicken-crispy.png" alt="Cardapio-Chicken Crispye" />
                        <h3>Chicken Crispye</h3>
                        <p>
                            Frango crocante com nossa receita secreta com tomate, alface e maionese especial
                </p>
                    </div>
                    <div>
                        <img src="assets/images/melted-salad.png" alt=" Cardapio-Melted Salad" />
                        <h3>Melted Salad</h3>
                        <p>
                            Hmabúrguer duplo com camadas de cheddar, tomate, alface e maionese de queijo
                </p>
                    </div>
                    <div>
                        <img src="assets/images/black-pearl.png" alt="Cardapio-Black pear" />
                        <h3>Black pearl</h3>
                        <p>
                            Hamburguer especial de frango oriental com cebolas caramelizadas, alface, maionese em nosso pão australiano
                </p>
                    </div>
                    <div>
                        <img src="assets/images/double-double.png" alt="Cardapio-Double Double" />
                        <h3>Double Double</h3>
                        <p>
                            O dobro de tudo, 2x mais carne, 2x mais bacon e 2x mais queijo cheddar
                </p>
                    </div>
                    <div>
                        <img src="assets/images/monster.png" alt="Cardapio-Monster" />
                        <h3>Monster</h3>
                        <p>
                            Hamburguer duplo de picanha, filé de peito de frango, bacon, cebola, tomate e alface com um molho especial
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
                            Batatas produzida e frita na hora. Batatas 100% naturais!!!
                </p>
                    </div>
                    <div>
                        <img src="assets/images/chicken-bites.png" alt="acompanhamentos-bites" />
                        <h3>Chicken biter</h3>
                        <p>
                            Pedacinhos de frango empanado em nossa receita secreta e fritos
                </p>
                    </div>
                    <div>
                        <img src="assets/images/onions.png" alt="acompanhamentos-monster" />
                        <h3>Monster</h3>
                        <p>
                            Cebola australiana cortada em rodelas empanada em nossa receita secreta
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
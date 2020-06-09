import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles['flex-footer']}>

                    <div className={styles['Logo-footer']}>
                        <img src="assets/logo/ChefHat.svg" alt="Logo do Chefe" />

                    </div>

                    <div className={styles.Endereco}>
                        <h6>Endereço:</h6>
                        <p>Rua Hcodelab n5, Bairro Javascript CCS - HTML5</p>
                    </div>

                    <div className={styles.contato}>

                        <h6>Fale Conosco:</h6>
                        <p>(055) 9985-6325</p>

                    </div>


                    <div className={styles.redes}>
                        <h6>CHEFHAT NA NET</h6>
                        <div className={styles.net}>
                            <img src="assets/images/003-whatsapp.svg" alt="Whatsapp" />
                            <img src="assets/images/001-facebook.svg" alt="Facebook" />
                            <img src="assets/images/011-instagram.svg" alt="Instagram" />
                            <img src="assets/images/013-twitter-1.svg" alt="Twitter" />
                        </div>
                    </div>


                </div>


                <nav className={styles['menu-footer']}>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/about-us">Sobre nós</a></li>
                        <li><a href="/cardapio">Cardápio</a></li>
                        <li><a href="/contact">Contato</a></li>
                    </ul>

                    <p>©2020, Hcode Red Team. Todos os direitos reservados</p>
                </nav>
            </footer>
        </>
    )
}
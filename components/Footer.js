import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles['flex-footer']}>

                    <div className={styles['Logo-footer']}>
                        <a href="/"><img src="assets/logo/hcode-burger-logo-white.svg" alt="Logo do Chefe" /></a>

                    </div>

                    <div className={styles.Endereco}>
                        <h6>Endereço</h6>
                        <p>Rua Hcodelab n5, <br />Bairro Javascript CCS <br /> HTML5</p>
                    </div>

                    <div className={styles.contato}>
                        <h6>Fale Conosco:</h6>
                        <p>(055) 9985-6325</p>

                    </div>


                    <div className={styles.redes}>
                        <h6>Redes Sociais</h6>
                        <div className={styles.net}>
                        <a href="https://web.whatsapp.com/"><img src="assets/images/003-whatsapp.svg" className={styles.whatsapp} alt="Whatsapp" /></a>
                        <a href="https://www.facebook.com/hcodebr/"><img src="assets/images/001-facebook.svg" className={styles.facebook} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/hcodebrasil/"><img src="assets/images/011-instagram.svg" className={styles.Instagram} alt="Instagram" /></a>
                        <a href="https://twitter.com/hcodebr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="assets/images/013-twitter-1.svg" className={styles.Twitter} alt="Twitter" /></a>
                        </div>
                    </div>


                </div>


                <nav className={styles['menu-footer']}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">Quem Somos</a></li>
                        <li><a href="/cardapio">Cardápio</a></li>
                        <li><a href="/contact">Contato</a></li>
                    </ul>

                    <p>©2020, Hcode Red Team. Todos os direitos reservados</p>
                </nav>
            </footer>
        </>
    )
}
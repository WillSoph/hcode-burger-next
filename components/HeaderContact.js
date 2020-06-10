import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './HeaderContact.module.css'



export default function HeaderContact(props) {

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link}>
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    );

    return (
        <>
            <div id={styles['menu-mobile']}>
                <Menu />
            </div>
            <header className={styles.header}>
                <nav className={styles.menu}>
                    <ul>
                        {LinkItem.map(item => (
                            <LinkMenu key={item.id} link={item.link} label={item.label} />
                        ))
                        }
                    </ul>
                    <div className={styles.logo}>
                        <a href="/"><img src="assets/logo/ChefHat.svg" alt="Logo do Chefe" /></a>
                    </div>

                    <div className={styles['redes-nav']}>

                        <div className={styles['net-nav']}>
                            <a href="https://web.whatsapp.com/" > <img className="whatsapp" src="assets/images/003-whatsapp.svg" alt="Whatsapp" /></a>
                            <a href="https://www.facebook.com/" > <img className="facebook" src="assets/images/001-facebook.svg" alt="Facebook" /></a>
                            <a href="https://www.instagram.com/"> <img className="Instagram" src="assets/images/011-instagram.svg" alt="Instagram" /></a>
                            <a href="https://twitter.com/login?lang=pt"> <img className="Twitter" src="assets/images/013-twitter-1.svg" alt="Twitter" /></a>
                        </div>
                    </div>

                    <div >
                        <button id={styles['menu-mobile']}>
                            <img src="assets/images/png-transparent-hamburger-button-computer-icons-menu-menu-rectangle-desktop-wallpaper-button.png" alt="" />
                        </button>
                    </div>

                </nav>


                <div className={styles.hamburguer}>

                    <h1>
                        Fale Conosco<br></br>
                        <b>#COMPARTILHE</b>
                    </h1>
                </div>
            </header>
        </>

    )
}





import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './Header.module.css'
// import './Headercode'



export default function Header(props) {

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
            <header>
                <nav className={styles.menu}>
                    <ul>

                        {LinkItem.map(item => (
                            <LinkMenu key={item.id} link={item.link} label={item.label} />
                        ))
                        }
                    </ul>
                    <div className={styles.logo}>
                        <img src="assets/logo/ChefHat.svg" alt="Logo do Chefe" />
                    </div>
                    <div className={styles['redes-nav']}>
                        <div className={styles['net-nav']}>
                            <a href=""> <img src="assets/images/003-whatsapp.svg" alt="Whatsapp" /></a>
                            <a href=""> <img src="assets/images/001-facebook.svg" alt="Facebook" /></a>
                            <a href=""> <img src="assets/images/011-instagram.svg" alt="Instagram" /></a>
                            <a href=""> <img src="assets/images/013-twitter-1.svg" alt="Twitter" /></a>
                        </div>
                    </div>
                    <div>
                        {/* <button id={styles['menu-mobile']} >

                        <img src="assets/images/png-transparent-hamburger-button-computer-icons-menu-menu-rectangle-desktop-wallpaper-button.png" alt="" />
                    </button> */}

                    </div>

                </nav>

                <div className='burguer'>
                    <div>
                        <img src="assets/images/hamburguer-desktop.png" alt="Burger-Bacon" />
                    </div>
                    <div className={styles.text}>
                        <h2>NOVO</h2>
                        <hr></hr>
                        <h1>BACON</h1>
                        <h3>LOVERS</h3>
                        <p>Deliciosas fatias de bacon com queijo cheddar, alface,
                    tomate e nosso hamburguer de picanha com bacon com o tempero secreto do chefHat</p>
                    </div>
                </div>
            </header>
        </>

    )
}





import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './HeaderContact.module.css'
import HeaderTopo from './HeaderTopo'



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
                <HeaderTopo />


                <div className={styles.hamburguer}>

                    <h1>
                        Receba nossas<br></br>
                        <b>#PROMOÇÕES</b>
                    </h1>
                </div>
            </header>
        </>

    )
}





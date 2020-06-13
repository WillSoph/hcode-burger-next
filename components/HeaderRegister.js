import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './HeaderRegister.module.css'
import HeaderTopo from './HeaderTopo'


export default function HeaderRegister(props) {

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link}>
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    );

    return (
        <>
            <header className={styles.header}>
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





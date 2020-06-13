import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './HeaderCardapio.module.css'
import HeaderTopo from './HeaderTopo'


export default function HeaderCardapio(props) {

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
                        Nossos Lanches <br></br>
                        <b>#HORADAFOME</b>
                    </h1>
                </div>
            </header>
        </>
    )
}
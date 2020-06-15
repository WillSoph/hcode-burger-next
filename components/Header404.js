import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './Error.module.css'
import HeaderTopo from './HeaderTopo'


export default function HeaderAbout(props) {

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
                <div className={styles.error}>

                    <h1>
                        PEDIDO NÃO ENCONTRADO<br></br>
                        <b>#ERROR 404</b>
                    </h1>

                </div>
            </header>
        </>

    )
}

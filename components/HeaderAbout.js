import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './HeaderAbout.module.css'
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

                <div className={styles.hamburguer}>

                    <h1 className={styles.h1}>
                        EM BUSCA DO <br></br>
                        <b>#HAMBURGUER PERFEITO</b>
                    </h1>

                </div>
            </header>
        </>

    )
}





import Link from 'next/link'
import LinkItem from './LinkItem'
import Menu from './MenuMobile'
import styles from './Header.module.css'
import HeaderTopo from './HeaderTopo'



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
            <header className={styles.header}>
                <HeaderTopo />

                <div className='burguer'>
                    <div>
                        <img src="assets/images/hamburguer-desktop.png" alt="Burger-Bacon" />
                    </div>
                    <div className={styles.text}>
                        <h2>NOVO</h2>
                        <hr></hr>
                        <h1 className={styles.bacon}>BACON</h1>
                        <h3>LOVERS</h3>
                        <p>Deliciosas fatias de bacon com queijo cheddar, alface,
                    tomate e nosso hambúrguer de picanha com bacon e o tempero secreto do chefHat</p>

                    </div>
                </div>
            </header>
        </>

    )
}





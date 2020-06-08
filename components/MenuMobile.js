import Link from 'next/link'
import styles from './Menumobile.module.css'

export default function Menumobile() {
    return (
        <>

            <input type="checkbox" id={styles.checkmenu} />
            <label htmlFor={styles.checkmenu}>
                <img src="assets/images/open-icon.png" alt="" id={styles.btnmenu} />
                <img src="assets/images/close.jpg" alt="" id={styles.cancelmenu} />


            </label>
            <div className={styles.sidebar}>
                <div className={styles['menu-header']}>
                    {/* <img src="assets/images/logo/logo-painel.svg" /> */}
                    <p>Seja Bem-Vindo!</p>
                </div>
                <ul>
                    <li><Link href="/"><a>HOME</a></Link></li>
                    <li><a href="#">QUEM SOMOS</a></li>
                    <li><a href="#">CARDÁPIO</a></li>
                    <li><Link href="/offers"><a>CONTATO</a></Link></li>
                </ul>
            </div>

        </>
    )
}
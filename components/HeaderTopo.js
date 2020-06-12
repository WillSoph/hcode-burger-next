import Link from 'next/link'
import LinkItem from './LinkItem'
import styles from './Header.module.css'
import React, { useState } from "react"
import Modal from "./Modal"

export default function HeaderTopo() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link}>
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    );

    return (
        <>

            <nav className={styles.menu}>
                <ul>

                    {LinkItem.map(item => (
                        <LinkMenu key={item.id} link={item.link} label={item.label} />
                    ))
                    }
                </ul>
                <div className={styles.logo}>
                    <img src="assets/logo/hcode-burger-logo-white.svg" alt="Logo do Chefe" />
                </div>
                {/* <div className={styles['redes-nav']}>
                    <div className={styles['net-nav']}>
                        <a href=""> <img src="assets/images/003-whatsapp.svg" className={styles.whatsapp} alt="Whatsapp" /></a>
                        <a href=""> <img src="assets/images/001-facebook.svg" className={styles.facebook} alt="Facebook" /></a>
                        <a href=""> <img src="assets/images/011-instagram.svg" className={styles.Instagram} alt="Instagram" /></a>
                        <a href=""> <img src="assets/images/013-twitter-1.svg" className={styles.Twitter} alt="Twitter" /></a>
                    </div>
                </div> */}
                <div>
                    <button className={`${styles.modal} ${styles['menu']}`} onClick={() => setIsModalVisible(true)}><b>Área Restrita</b></button>
                    {isModalVisible ? < Modal onClose={() => setIsModalVisible(false)}>
                    </Modal> : null}
                </div>

            </nav>

        </>
    )
}
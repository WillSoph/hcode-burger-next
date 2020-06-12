import Head from 'next/head'
import Link from 'next/link'
import HeaderRegister from './../components/HeaderRegister'
import LinkItem from './../components/LinkItem'
import Menu from './../components/MenuMobile'
import styles from './../components/Register.module.css'
import Footer from '../components/Footer'

import React, { useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'



export default function Register(props) {

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link}>
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    );
    const [values, setValues] = useState({ name: '', email: '', phone: '', birth_at: '' })

    const handleImputChange = e => {
        const { name, value } = e.target

        setValues({ ...values, [name]: value })

    }

    const handleFormSubmit = e => {
        e.preventDefault()


        //axios.post('http://localhost:3333/users', values).then( res => {
        axios.post('https://hcodelab-hamburgueria.herokuapp.com/contato', values).then(res => {

            alert(`Ola ${res.data.name}, seu cadastro foi efetuado com sucesso, aguarde nossas promoções ${res.data.id}`)
            window.location.href = ("/index") // Redireciona para a pagina login
        }).catch(err => console.log("Erro de Cadastro", err))

    }

    return (
        <>
            <Head>
                <title>HCode Burger - Registre-se</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderRegister />
            <section>
                <div className={styles.duvidas}>
                    <h2>Fique por dentro dos nossos lançamentos e promoções</h2>
                    <h2>Cadastre-se e ganhe <span className={styles.textOrange}>10% de desconto</span> no seu primeiro pedido</h2>
                </div>
                <div className={styles.formulario}>


                    <form onSubmit={handleFormSubmit} className={styles.form} action="">

                        <input type="text" name="name" id={styles.nome} placeholder="Como se chama?" onChange={handleImputChange} onFocus={handleImputChange} />

                        <input type="text" name="birth_at" id={styles.email} placeholder="Sua data de Aniversário" onChange={handleImputChange} onFocus={handleImputChange} />

                        <input type="email" name="email" id={styles.email} placeholder="Email por favor" onChange={handleImputChange} onFocus={handleImputChange} />


                        <input type="text" name="phone" id={styles.numero} placeholder="Ligamos pra onde ?" onChange={handleImputChange} onFocus={handleImputChange} />

                        <button type="submit" className={styles.btn}>Enviar</button>

                    </form>
                    <div className={styles.burguer}>
                        <img src="assets/images/photo-register-001.png" alt="" />
                    </div>

                </div>


                <div className={styles.outros}>
                    <h4>Outros Canais</h4>
                </div>

                <div className={styles.flex}>

                    <div className={styles['telefone-chef']}>
                        <h4>Telefone:</h4>
                        <h5>(055)9985-6325</h5>
                        <h5>(055)9985-6326</h5>
                    </div>

                    <div className={styles['email-chef']}>
                        <h4>Email:</h4>
                        <h5>customer@chefhat.com</h5>
                        <h5>suggestion@chefhat.com</h5>
                    </div>

                    <div className={styles.onions}>
                        <img src="assets/images/onions.png" alt="onions" />
                    </div>
                </div>

            </section>
            <Footer />

        </>

    )
}





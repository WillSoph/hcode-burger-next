import Head from 'next/head'
import HeaderContact from '../components/HeaderContact'
import Footer from '../components/Footer'
import styles from '../components/Contact.module.css'
import Menu from '../components/MenuMobile'
import HeaderTopo from '../components/HeaderTopo'

import React, { useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'


export default function Contact() {

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link}>
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    );

    const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })

    const handleImputChange = e => {
        const { name, value } = e.target

        setValues({ ...values, [name]: value })

    }

    const handleFormSubmit = e => {
        e.preventDefault()


        //axios.post('http://localhost:3333/users', values).then( res => {
        axios.post('https://hcodelab-hamburgueria.herokuapp.com/faleconosco', values).then(res => {

            alert(`Ola ${res.data.name} seus dados cadastrados com sucesso ID: ${res.data.id}`)
            window.location.href = ("/index") // Redireciona para a pagina login
        }).catch(err => console.log("Erro de Cadastro", err))

    }
    return (
        <>
            <Head>
                <title>HCode Burger - Contato</title>
                <link rel="icon" href="/favicon-16x16.png" />
            </Head>
            <div id='menu-mobile'>
                <Menu />
            </div>
            <HeaderTopo />

            <HeaderContact />
            <section>
                <div className={styles.duvidas}>
                    <h2>Compartilhe suas dúvidas, sugestões, reclamações ou até mesmo sua receita secreta</h2>
                </div>
                <div className={styles.formulario}>

                    <div className={styles.burguer}>
                        <img src="assets/images/hamburguer-melted.png" alt="" />
                    </div>
                    <form onSubmit={handleFormSubmit} className={styles.form} action="">

                        <div className={styles.field}>
                            <h3>Nome :</h3>
                        </div>

                        <input type="text" name="name" id={styles.nome} placeholder="Como se chama?" onChange={handleImputChange} onFocus={handleImputChange} />
                        <div className={styles.field}>
                            <h3>Email :</h3>
                        </div>

                        <input type="email" name="email" id={styles.email} placeholder="Email por favor" onChange={handleImputChange} onFocus={handleImputChange} />
                        <div className={styles.field}>
                            <h3>Telefone :</h3>
                        </div>

                        <input type="text" name="phone" id={styles.numero} placeholder="Ligamos pra onde ?" onChange={handleImputChange} onFocus={handleImputChange} />
                        <div className={styles.field}>
                            <h3>Mensagem :</h3>
                        </div>

                        <input name="message" id={styles.mensagem} placeholder="pode falar" onChange={handleImputChange} onFocus={handleImputChange}></input>

                        <button type="submit" className={styles.btn}>Enviar</button>

                    </form>

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
                        <h5>customer@hcodeburger.com</h5>
                        <h5>suggestion@hcodeburger.com</h5>
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
import Head from 'next/head'
import HeaderContact from '../components/HeaderContact'
import Footer from '../components/Footer'
import styles from '../components/Contact.module.css'


export default function Contact() {
    return (
        <>
            <Head>
                <title>HCode Burger - Contato</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderContact />
            <section>
                <div className={styles.duvidas}>

                    <h2>Compartilhe suas dúvidas, sugestões reclamações ou até mesmo sua receita secreta</h2>
                </div>
                <div className={styles.formulario}>

                    <div className={styles.burguer}>
                        <img src="assets/images/hamburguer-melted.png" alt="" />
                    </div>
                    <form className={styles.form} action="">


                        <input type="text" name="Nome" id={styles.nome} placeholder="Como se chama?" />


                        <input type="email" name="Email" id={styles.email} placeholder="Email por favor" />


                        <input type="text" name="Numero" id={styles.numero} placeholder="Ligamos pra onde ?" />


                        <input type="text" name="Mensagem" id={styles.mensagem} placeholder="pode falar" />

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
                        <h5>customer@chefhat.com</h5>
                        <h5>sugetion@chefhat.com</h5>
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
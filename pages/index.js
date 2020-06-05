import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>HCode Burger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <p>Essa é a página Inicial</p>
      <Footer />
    </>
  )
}

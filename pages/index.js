import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/MenuMobile'
import HeaderTopo from '../components/HeaderTopo'



export default function Index() {
  return (
    <>
      <Head>
        <title>HCode Burger</title>
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <div id='menu-mobile'>
        <Menu />
      </div>
      <HeaderTopo />

      <Header />
      <section>

        <div className="primeira-parte">
          <div className="corte">
            <img src="assets/images/hamburguer-about-us.png" alt="hamburguer" />
          </div>

          <div className="chef">
            <h2>The Bispinho</h2>
            <h3>HCODE Burger's Chef</h3>

            <p> Gabriel Bispo ou "Bispinho", autodidata, transformou a paixão pela cozinha em profissão. Mais do que alguém responsável pela elaboração do cardápio, preparação dos pratos e combinação dos sabores, o chef é a alma da Hcode Burguer. 
                    <br></br><br></br>

                    Há sempre um grande chef por trás de um grande restaurante...
                </p>

            <div className="btn">
              <button><a href="Sobre.html">Continue</a></button>
            </div>
          </div>
          <div className="chef1">
            <img src="assets/images/Chefs-phto-signature.png" alt="Chefe-Bispinho" />
          </div>
        </div>



        <div className="segunda-parte">
          <div>
            <h3>FEITO COM INGREDIENTES <br></br> <b>FRESCOS</b> E <b>NATURAIS</b> </h3>
          </div>


          <div className="conatiner">
            <div className="Pao">
              <h5>PÃO <b>FRESQUINHO</b> </h5>
              <p>
                Pão caseiro assado todo dia especialmente para você, escolha entre um pão macio ou crocante e saboreie nossos lanches
                </p>
            </div>
            <div className="Produtos">
              <h5>Produtos <b>da Fazenda</b> </h5>
              <p> Todos os nossos produtos são cultivados em fazendas livre de compostos químicos, produtos frescos e saudáveis sempre</p>
            </div>

            <div className="Receita">
              <h5>Receita <b>Secreta</b> </h5>
              <p> Um pouco disso, daquilo e mais daquele ali também, assim foi criado um mix de temperos para o blend e também empanar nossas carnes</p>
            </div>

            <div className="Alface">
              <h5>Alface <b>da Horta</b> </h5>
              <p> Um dos segredos de um bom hamburguer é usar ingredientes frescos para deixar nossos lanches ainda mais saborosos</p>
            </div>
            <div className="Queijos">
              <h5>QUEIJOS<b> CASEIROS</b></h5>
              <p> Queijo direto da fazendo para os nossos lanches, acompanhamos todo o processo de fabricação para assegurar a qualidade de nossos lanches</p>
            </div>
            <div className="Maioneses">
              <h5>“THE”<b> MAIONESE</b></h5>
              <p> Nosso chefe passou anos encontrando a combinação para uma maionese perfeita, se você ja provou, sabe do que estamos falando.</p>
            </div>

            <div className="produtos-mobile">
              <img src="assets/images/best-hamburguer-mobile.png" alt="" />
            </div>
          </div>
        </div>



        <div className="entrega">
          <div className="horas">
            <h5>
              ENTREGA GRATIS
                </h5>
            <p>Faça o seu pedido agora pelos nossos canais de entrega</p>

            <img src="assets/images/ifood.png" alt="Ifood" />

            <img src="assets/images/uber.png" alt="uber" />

            <img src="assets/images/rappi.png" alt="rappi" />
          </div>

          <div className="dias">
            <h5>HORÁRIOS</h5>
            <p> Terça - Domingo<b><br></br>
                  4:00pm - 2:00am
                    </b>
            </p>
            <img src="assets/images/horarios-fries.png" alt="Batatas fritas" />

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

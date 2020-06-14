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
            <h2>NOME DO CHEF</h2>
            <h3>O CHEF TABLE</h3>

            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea quia unde libero, beatae deserunt,
            cum placeat neque tenetur expedita dicta eaque accusamus ut aperiam hic at dignissimos nisi non.
                    <br></br><br></br>

                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente eius officia provident tempore
                ullam soluta odio sint!
                </p>
            </div>
            <div className="Produtos">
              <h5>Produtos <b>da Fazenda</b> </h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente eius officia provident tempore
                    ullam soluta odio sint!</p>
            </div>

            <div className="Receita">
              <h5>Receita <b>Secreta</b> </h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente eius officia provident tempore
                    ullam soluta odio sint!</p>
            </div>

            <div className="Alface">
              <h5>Alface <b>da Horta</b> </h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente eius officia provident tempore
                    ullam soluta odio sint!</p>
            </div>
            <div className="Queijos">
              <h5>QUEIJOS<b> CASEIROS</b></h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente eius officia provident tempore
                    ullam soluta odio sint!</p>
            </div>
            <div className="Maioneses">
              <h5>“THE”<b> MAIONESE</b></h5>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente eius officia provident tempore
                    ullam soluta odio sint!</p>
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

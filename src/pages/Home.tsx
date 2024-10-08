import Header from "../components/header/Header"
import HeroSection from "../components/hero/HeroSection"
import { Solution } from "../components/soluction/Solution"

import Star from '../assets/star.svg'
import StarOuter from '../assets/starOuter.svg'
import ProfileImageOne from '../assets/profileImageOne.svg'

import '../styles/testimonial.css'

const HomePage = () => {
  return (
    <>
      <Header />

      <HeroSection
        title="Create and Customize Tech Solutions for Your Business Needs"
        description="Exploring the potential of technology through projects that solve real problems and create value for your business."
        primaryButtonText="Register"
        secondaryButtonText="See More" />

      <Solution
        title="Recent Projects"
        description="A selection of projects showcasing my skills in web development and innovative business solutions" />

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only bold">
              Conselho de quem conhece
            </p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
            comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                <p className="bold">Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
          </div>

          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                <p className="bold">Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
          </div>

          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                <p className="bold">Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
          </div>
        </section>
      </ section>

    </>

  )
}

export default HomePage
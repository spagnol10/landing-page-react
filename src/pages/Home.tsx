import Header from "../components/header/Header"
import HeroSection from "../components/hero/HeroSection"
import { Soluction } from "../components/soluction/Soluction"

const HomePage = () => {
  return (
    <>
      <Header />
      
      <HeroSection
        title="Soluções Tecnológicas Sob Medida para Suas Necessidades"
        description="Explorando o potencial da tecnologia através de projetos que resolvem problemas reais e criam valor para o seu negócio."
        primaryButtonText="Cadastre-se"
        secondaryButtonText="Veja mais" />

      <Soluction
        title="Projetos Recentes"
        description="Uma seleção de projetos que demonstram minha habilidade em desenvolvimento web e soluções empresariais inovadoras." />

        
    </>

  )
}

export default HomePage
import Header from "../components/header/Header"
import HeroSection from "../components/hero/HeroSection"
import { Soluction } from "../components/soluction/Soluction"

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        primaryButtonText="Cadastre-se"
        secondaryButtonText="Veja mais"
      />
      <Soluction />
    </>
  )
}

export default HomePage
import Header from "../components/header/Header"
import HeroSection from "../components/hero/HeroSection"
import { Soluction } from "../components/soluction/Soluction"
import { Testimonial } from "../components/testimonial/Testimonial"

const HomePage = () => {
  return (
    <>
      <Header />
      
      <HeroSection
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        primaryButtonText="Cadastre-se"
        secondaryButtonText="Veja mais" />

      <Soluction
        title="Lorem Ipsum is simply"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

      <Testimonial
        title="Lorem Ipsum is simply"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

        
    </>

  )
}

export default HomePage
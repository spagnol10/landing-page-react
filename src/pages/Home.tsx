import { Contato } from "../components/contact/Contato"
import { Price } from "../components/price/Price"
import { Solution } from "../components/soluction/Solution"
import Header from "../components/header/Header"
import HeroSection from "../components/hero/HeroSection"
import Testimonials from "../components/testimonial/Testimonial"
import { Footer } from "../components/footer/Footer"

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


      <Testimonials />

      <Price />

      <Contato />

      <Footer />
    </>

  )
}

export default HomePage
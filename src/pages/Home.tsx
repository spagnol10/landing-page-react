import Header from "../components/header/Header"
import HeroSection from "../components/hero/HeroSection"
import { Solution } from "../components/soluction/Solution"
import Testimonials from "../components/testimonial/Testimonial"

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
    </>

  )
}

export default HomePage
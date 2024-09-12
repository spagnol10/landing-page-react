import '../../styles/soluction.css'
import Mob from '../../assets/images/mob.png'
import Web from '../../assets/images/web.png'
import MobileAndWeb from '../../assets/images/mobileAndWeb.png'

import Card from "../card/Card"

interface HeroSectionProps {
  title: string;
  description: string;
}

export function Solution({ title, description }: HeroSectionProps) {
  return (
    <section id='section'>
      <div className='text content'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className='even-columns' >
        <Card
          title="Mobile Solution"
          description="Customized solutions for mobile platforms."
          imageUrl={Mob} 
        />
        <Card
          title="Web Solution"
          description="High-performance and scalable web solutions."
          imageUrl={Web} 
        />
        <Card
          title="Mobile and Web Solution"
          description="Integrated solutions for both web and mobile."
          imageUrl={MobileAndWeb} 
        />
      </div>
    </section>
  )
}
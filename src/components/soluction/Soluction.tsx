import '../../styles/soluction.css'
import Feirafacil from "../../assets/logo-feira-light.svg"
import Card from "../card/Card"

export function Soluction() {
  return (
    <section >
      <div className='text'>
        <h1>Sob Medida</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <p></p>
      </div>
      <div className='cards'>
        <Card
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imageUrl={Feirafacil} />
        <Card
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imageUrl={Feirafacil} />
        <Card
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imageUrl={Feirafacil} />

      </div>
    </section>
  )
}
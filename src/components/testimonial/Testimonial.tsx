import '../../styles/testimonial.css'
import Comentario from '../comentario/Comentario';

interface TestimonialProps {
  title: string;
  description: string;
}

export function Testimonial({ title, description }: TestimonialProps) {
  return (
    <section id='testimonial'>
      <div className='text'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className='card even-columns'>
        <Comentario
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/2024-01-31T123000Z_1_LYNXMPEK0U0GO_RTROPTP_4_VODAFONE-IDEA-ELON-MUSK-e1706737419930.jpg?w=1220&h=674&crop=1&quality=85"
          rating={4}
          comment="This is a great product! I highly recommend it. The quality is amazing, and it exceeded my expectations." />
        <Comentario
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/2024-01-31T123000Z_1_LYNXMPEK0U0GO_RTROPTP_4_VODAFONE-IDEA-ELON-MUSK-e1706737419930.jpg?w=1220&h=674&crop=1&quality=85"
          rating={4}
          comment="This is a great product! I highly recommend it. The quality is amazing, and it exceeded my expectations." />
        <Comentario
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/2024-01-31T123000Z_1_LYNXMPEK0U0GO_RTROPTP_4_VODAFONE-IDEA-ELON-MUSK-e1706737419930.jpg?w=1220&h=674&crop=1&quality=85"
          rating={4}
          comment="This is a great product! I highly recommend it. The quality is amazing, and it exceeded my expectations." />

      </div>
    </section>
  )
}
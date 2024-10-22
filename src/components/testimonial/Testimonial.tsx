import React from 'react';
import Star from '../../assets/star.svg';
import StarOuter from '../../assets/starOuter.svg';
import ProfileImageOne from '../../assets/profileImageOne.svg';

import '../../styles/testimonial.css'

interface Testimonial {
  image: string;
  text: string;
  rating: number;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    image: ProfileImageOne,
    text: "Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso: provar uma boa comida DonaFrost no almoço.",
    rating: 4,
    name: "Ellon Ma",
    role: "CEO BING CHILLING",
  },
  {
    image: ProfileImageOne,
    text: "A experiência de degustar os pratos da DonaFrost é única e sempre deliciosa!",
    rating: 5,
    name: "Jane Doe",
    role: "Food Blogger",
  },
  {
    image: ProfileImageOne,
    text: "Os pratos congelados são saborosos e práticos, uma ótima opção para o dia a dia.",
    rating: 4,
    name: "John Smith",
    role: "Gastrônomo",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only bold">Conselho de quem conhece</p>
          <h2>Cada cliente importa!</h2>
        </span>
        <p>
          Quem já pediu sabe da qualidade das nossas receitas. Estamos quebrando a ideia de que comida congelada não pode ser saborosa. Acompanhe abaixo os testemunhos de quem já comprou e aprovou.
        </p>
      </header>

      <section className="carousel">
        {testimonials.map((testimonial, index) => (
          <div className="carousel-content" key={index}>
            <div className="carousel-card">
              <img src={testimonial.image} alt={`Imagem perfil cliente ${index + 1}`} />
              <span className="testimony">
                <p>{testimonial.text}</p>
              </span>
              <span className="rating">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <img key={i} src={Star} alt="ícone estrela" width={22} height={20} />
                ))}
                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                <p className="bold">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </span>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Testimonials;

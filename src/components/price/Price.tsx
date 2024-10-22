import React from 'react';
import './price.css'; 

interface Plan {
  title: string;
  description: string;
  price: string;
  buttonText: string;
}

const plans: Plan[] = [
  {
    title: 'Plano Básico',
    description: 'Acesso a recursos essenciais.',
    price: '$9.99/mês',
    buttonText: 'Assinar',
  },
  {
    title: 'Plano Padrão',
    description: 'Inclui recursos adicionais e suporte prioritário.',
    price: '$19.99/mês',
    buttonText: 'Assinar',
  },
  {
    title: 'Plano Premium',
    description: 'Todos os recursos + suporte 24/7.',
    price: '$29.99/mês',
    buttonText: 'Assinar',
  },
];

export function Price() {
  return (
    <section id='pricing' className="price-section">
      <h2>Escolha seu Plano</h2>
      <div className="price-cards">
        {plans.map((plan, index) => (
          <div className="price-card" key={index}>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <h4>{plan.price}</h4>
            <button>{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

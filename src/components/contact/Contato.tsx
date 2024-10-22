import React, { useState } from 'react';
import './contato.css'; // Certifique-se de ter um arquivo CSS para estilizar o componente

export function Contato() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
    } else {
      setError('');
      // Aqui você pode adicionar a lógica para enviar o e-mail
      alert(`E-mail enviado: ${email}`);
      setEmail(''); 
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section id='contact' className="contato-section">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="contato-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
        />
        <button type="submit">Enviar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
}

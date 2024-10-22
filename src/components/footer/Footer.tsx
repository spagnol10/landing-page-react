import React from 'react';
import './footer.css'; // Certifique-se de ter um arquivo CSS para estilizar o footer

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Entre em Contato</h3>
        <p>Email: contato@exemplo.com</p>
        <p>Telefone: (11) 1234-5678</p>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

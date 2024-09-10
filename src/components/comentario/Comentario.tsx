import React from 'react';
import '../../styles/card-testemonial.css'

const Comentario = ({ image, rating, comment }:any) => {
  const renderStars = () => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i} className="star">
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt="User" className="user-photo" />
        <div className="stars">{renderStars()}</div>
      </div>
      <div className="card-comment">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comentario;
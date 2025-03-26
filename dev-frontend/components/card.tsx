import React from 'react';

interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, text, imgSrc }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Card;

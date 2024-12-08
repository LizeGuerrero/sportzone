import React from 'react';
import Image from 'next/image';

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, image }) => {
  return (
    <div className="offer-card">
      <Image src={image} alt={title} className="offer-card__image" width={300} height={200} />
      <div className="offer-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OfferCard;

import React from 'react';

interface StarProps {
  filled: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ filled, onClick }) => {
  return (
    <span style={{ color: filled ? 'yellow' : 'grey', cursor: 'pointer' }} onClick={onClick}>
      &#9733;
    </span>
  );
};

interface iStarRatingProps {
  value: number; // Rating value out of 5
  onChange: (newValue: number) => void; // Function to handle rating change
}

const StarRating: React.FC<iStarRatingProps> = ({ value, onChange }) => {
  const handleClick = (newValue: number) => {
    onChange(newValue);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star key={i} filled={i <= value} onClick={() => handleClick(i)} />
    );
  }
  return <div>{stars}</div>;
};

export default StarRating;

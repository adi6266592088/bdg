import React from 'react';

interface GameCardProps {
  imageUrl: string;
  name: string;
  onClick?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ imageUrl, name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-b from-yellow-400 to-amber-500 rounded-lg p-1.5 shadow-lg flex flex-col items-center transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-50 w-full text-left"
      aria-label={`Play ${name}`}
    >
      <img src={imageUrl} alt={name} className="rounded-md w-full h-auto object-cover" />
      <span className="text-black font-bold mt-2 text-sm">{name}</span>
    </button>
  );
};

export default GameCard;
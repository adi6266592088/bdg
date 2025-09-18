import React from 'react';

interface GameCardProps {
  imageUrl: string;
  name: string;
}

const GameCard: React.FC<GameCardProps> = ({ imageUrl, name }) => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-amber-500 rounded-lg p-1.5 shadow-lg flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img src={imageUrl} alt={name} className="rounded-md w-full h-auto object-cover" />
      <span className="text-black font-bold mt-2 text-sm">{name}</span>
    </div>
  );
};

export default GameCard;

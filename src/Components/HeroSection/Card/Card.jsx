import React, { useState } from 'react';
import Sound from '../../../assets/Sound.svg';
import Idea from '../../../assets/Idea.svg';

const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='Container w-3/6 font-semibold text-3xl cursor-pointer'>
      <div
        className={`relative w-full h-80 rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out transform-gpu ${
          isFlipped ? '[transform:rotateY(0deg)]' : '[transform:rotateY(360deg)] [transformStyle:preserve-3d]'
        }`}
        onClick={handleClick}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full rounded-lg bg-gray-800 text-white flex justify-center items-center frontface transform bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-500 
         `}
          // style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
        >
          {/* Icon Div */}
          <div className='absolute top-0 left-0 p-8 px-10'>
            <img src={Idea} alt='Hint' className='bg-transparent' />
          </div>
          <div className='absolute top-0 right-0 p-8 px-10'>
            <img src={Sound} alt='Sound' className='bg-transparent' />
          </div>

          <div className='flex flex-col justify-center items-center'>{frontContent}</div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full rounded-lg shadow-md flex justify-center items-center text-white backface transform bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-600 
          ${
            isFlipped ? '' : ' scale-x-0  rotate-y-180'
          }`}
          // style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
        >
          {/* Icon Div */}
          <div className='absolute top-0 left-0 p-8 px-10'>
            <img src={Idea} alt='Hint' className='bg-transparent' />
          </div>
          <div className='absolute top-0 right-0 p-8 px-10'>
            <img src={Sound} alt='Sound' className='bg-transparent' />
          </div>

          <div className='flex flex-col justify-center items-center'>{backContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

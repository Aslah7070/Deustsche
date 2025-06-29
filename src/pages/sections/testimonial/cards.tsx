import Image from 'next/image';
import React from 'react';

interface ICards {
  name: string;
  image: string;
  description: string;
  testimonial: string;
  isActive?: boolean;
  stackIndex: number;
}

function Cards({
  name,
  image,
  description,
  testimonial,
  isActive = false,
  stackIndex
}: ICards) {
  return (
    <div
      className={`lg:w-[450px] w-full h-[250px] bg-white shadow-xl rounded-xl p-5 relative transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
        isActive ? 'scale-90 shadow-2xl' : 'scale-99 shadow-lg hover:scale-98'
      }`}
      style={{
        zIndex: isActive ? 100 : 50 - stackIndex,
        transform: `translateY(${stackIndex * 30}px) scale(${
          isActive ? 1 : 0.95 - stackIndex * 0.02
        })`,
      }}
    >
      {/* Avatar */}
      <div className='flex w-full justify-start mb-2'>
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
          <Image src={image} alt={name} width={64} height={64} className="object-cover" />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between h-[calc(100%-72px)] overflow-hidden">
        <p className="text-sm text-gray-600 leading-snug line-clamp-3">
          “{testimonial}”
        </p>
        <div className="mt-auto">
          <h2 className="text-sm font-bold text-gray-800 mt-3">{name}</h2>
          <h3 className="text-xs text-gray-500">{description}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;

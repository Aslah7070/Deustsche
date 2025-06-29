'use client'
import React from 'react'
import Cards from './cards'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { clients } from '@/constant/testimonial.const'

interface IRightProps {
  selectedIndex: number
  onCardClick: (index: number) => void
}

function TestimonialRight({ selectedIndex, onCardClick }: IRightProps) {
  const getStackOrder = () => {
    const reordered = [...clients]

    return reordered.map((client, originalIndex) => {
      const isActive = originalIndex === selectedIndex
      const stackIndex =
        originalIndex === selectedIndex
          ? 0
          : (originalIndex - selectedIndex + clients.length) % clients.length

      return {
        ...client,
        originalIndex,
        stackIndex,
        isActive,
      }
    })
    .filter(c => c.stackIndex <= 1)
    .sort((a, b) => a.stackIndex - b.stackIndex)
  }

  const stackedCards = getStackOrder()

  return (
    <div className="relative h-[400px] lg:w-[500px] max-w-full px-5 pt-10 lg:pt-0 lg:px-0">
      {stackedCards.map((client) => (
        <div
          key={client.originalIndex}
          className="absolute left-0 right-0"
          onClick={() => onCardClick(client.originalIndex)}
        >
          <Cards
            name={client.name}
            image={client.image}
            description={client.description}
            testimonial={client.testimonial}
            isActive={client.isActive}
            stackIndex={client.stackIndex}
          />
        </div>
      ))}

 
      <button
        onClick={() => onCardClick((selectedIndex - 1 + clients.length) % clients.length)}
        className="absolute hidden lg:flex right-[-60px] top-0 hover:cursor-pointer w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors z-50"
      >
        <FiChevronUp className="w-5 h-5 text-gray-600" />
      </button>


      <button
        onClick={() => onCardClick((selectedIndex + 1) % clients.length)}
        className="absolute hover:cursor-pointer right-[-60px] top-1/2 w-10 h-10 bg-white rounded-full shadow-lg hidden lg:flex items-center justify-center hover:bg-gray-50 transition-colors z-50"
      >
        <FiChevronDown className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )
}

export default TestimonialRight

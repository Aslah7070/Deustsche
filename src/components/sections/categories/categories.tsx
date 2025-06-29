



'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cards from './cards';
import { CATEGORIES } from '@/constant/categories.const';

function Category() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true     // trigger only once
    });
  }, []);

  return (
    <div className="pt-10 md:pt-20 lg:pt-32 px-4 sm:px-6 lg:px-16">
      <div data-aos="fade-up" className="space-y-6 md:space-y-10">
        <p className="text-center text-base md:text-xl text-[#5e6282] tracking-widest font-sans font-bold">
          CATEGORY
        </p>
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold leading-tight">
          We Offer Best Services
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-6">
              {CATEGORIES.map((item, index) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[45%] lg:w-[22%] min-w-[250px]"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <Cards
                    title={item.title}
                    image={item.image}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;


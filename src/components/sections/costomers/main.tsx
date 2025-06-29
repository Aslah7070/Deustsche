"use client";

import { services } from "@/constant/services.const";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// export const services = [
//   {
//     id: 1,
//     image: "https://i.pinimg.com/736x/fd/0e/de/fd0edefdc9a585324f3df11b1624c6dc.jpg",
//   },
//   {
//     id: 2,
//     image: "https://i.pinimg.com/736x/62/12/73/6212733e6aa3359fc385ba12219cc384.jpg",
//   },
//   {
//     id: 3,
//     image: "https://i.pinimg.com/736x/fe/8c/f9/fe8cf94f2697c19c2bd23797ed922759.jpg",
//   },
//   {
//     id: 4,
//     image: "https://i.pinimg.com/736x/34/ba/7b/34ba7be2335bbf050b7aac9252cc0ddc.jpg",
//   },
//   {
//     id: 5,
//     image: "https://i.pinimg.com/736x/91/fd/f0/91fdf01ba1c7ca974393b353655558fc.jpg",
//   },
// ];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollEl.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollEl.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1000);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => animationId = requestAnimationFrame(scroll);

    scrollEl.addEventListener("mouseenter", handleMouseEnter);
    scrollEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationId);
      scrollEl.removeEventListener("mouseenter", handleMouseEnter);
      scrollEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className=" text-white py-20 px-6 lg:px-20">
      <div className="text-center mb-12">
        <div className="text-xs bg-yellow-400 text-black inline-block px-3 py-1 rounded-full mb-4">
          Our Services
        </div>
        <h2 className="text-4xl font-semibold leading-tight">
          Explore our service offerings
        </h2>
      </div>

      <div
        className="flex gap-6 overflow-x-hidden h-[300px]"
        ref={scrollRef}
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedServices.map((service, index) => (
           <div
            key={`${service.id}-${index}`}
            className="bg-zinc-900 rounded-3xl  border-none flex-shrink-0  relative h-[80px] w-[350px]"
          >
            <Image
            
              src={service.image}
              alt={`Service ${service.id}`}
              fill
              className="object-cover bg-white"
              sizes="(max-width: 768px) 100vw, 350px"
              priority={index < 5} // preload only first group

            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

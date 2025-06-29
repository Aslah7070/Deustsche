"use client";

import { services } from "@/constant/services.const";
import Image from "next/image";
import React, { useEffect, useRef } from "react";



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

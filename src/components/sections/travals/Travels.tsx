

"use client";
import React from "react";
import TravelCards from "./Travalscards";
import { trips } from "@/constant/travals.constent";
import { motion } from "framer-motion";

const Travels = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10 md:py-20">
      <div className="mb-16 text-center px-4">
        <p className="text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold">
          TOP SELLING
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold mt-2">
          Top Destinations
        </h2>
      </div>

      <div className="w-full max-w-screen-xl px-4 flex flex-wrap justify-center gap-8">
        {trips.map((trip, index) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full sm:w-[48%] md:w-[30%] max-w-[320px]"
          >
            <TravelCards
              image={trip.image}
              place={trip.duration}
              days={trip.duration}
              price={trip.price}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Travels;

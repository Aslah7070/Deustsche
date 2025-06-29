"use client";
import React from 'react';
import { Calendar, Send, BarChart3, Heart } from 'lucide-react';
import { BiLeaf } from "react-icons/bi";
import Image from 'next/image';

const BookingRingt = () => {
  return (
    <div className="w-full md:w-2/4 md:mt-60   p-4 md:p-8 flex flex-col items-center justify-center relative">
      
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md relative">
        {/* Image */}
        <div className="h-48 flex justify-center overflow-hidden rounded-t-3xl">
          <Image
            src="/assets/show.png"
            alt="Trip to Greece - Santorini"
            width={250}
            height={300}
            className="h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Trip To Greece</h2>
          <p className="text-gray-500 text-sm mb-4 sm:mb-6">14-29 June | by Robbin jc</p>

          <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
            {[BiLeaf, Calendar, Send].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
              >
                <Icon className="w-5 h-5 text-gray-600" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-sm">24 people going</span>
            </div>
            <Heart className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Floating Status Card */}
      <div className="absolute top-[65%] right-4 md:right-20 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 w-40 sm:w-48">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/assets/round.png"
              alt="Rome"
              width={200}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Ongoing</p>
            <p className="text-sm font-semibold text-gray-900">Trip to Rome</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">40% completed</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-20 md:w-32 h-20 md:h-32 bg-white/50 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-16 md:w-24 h-16 md:h-24 bg-blue-200/30 rounded-full blur-xl"></div>
    </div>
  );
};

export default BookingRingt;

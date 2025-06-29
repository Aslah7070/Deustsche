import { socialMedia } from '@/constant/socialmedia.const';
import Image from 'next/image';
import React from 'react';

export default function JadooFooter() {
  return (
    <footer className="bg-white px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Jadoo.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700">About</a></li>
              <li><a href="#" className="hover:text-gray-700">Careers</a></li>
              <li><a href="#" className="hover:text-gray-700">Mobile</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700">Help/FAQ</a></li>
              <li><a href="#" className="hover:text-gray-700">Press</a></li>
              <li><a href="#" className="hover:text-gray-700">Affiliates</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4">More</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700">Airlinefees</a></li>
              <li><a href="#" className="hover:text-gray-700">Airline</a></li>
              <li><a href="#" className="hover:text-gray-700">Low fare tips</a></li>
            </ul>
          </div>

          {/* Social & Apps */}
          <div>
            <p className="text-gray-500 text-sm mb-4">Discover our app</p>
            
            {/* Social Icons */}
           <div className="flex gap-3 mb-6">
  {socialMedia.map(({ id, icon: Icon }) => (
    <div key={id} className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
      <Icon className='bg-white'  />
    </div>
  ))}
</div>

            {/* App Buttons */}
            <div className="space-y-3 justify-between items-center w-[300px]  ">
              <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 w-fit">
                <span className="w-8 h-6 bg-white rounded-full">
                  <Image src='https://i.pinimg.com/736x/0d/d5/68/0dd568da2a7650b3967f0392b1afceb4.jpg' width={100}height={100} alt='playstore' />
                </span>
                <div className="text-white text-xs ">
                  <div>GET IT ON </div>
                  <div className="font-semibold"> App Store</div>
                </div>
              </div>
              
              <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 w-fit">
               <span className="w-8 h-6 bg-white rounded-full">
                  <Image src='https://i.pinimg.com/736x/db/fe/75/dbfe75990174020a7ebf8799999212d8.jpg' width={100}height={100} alt='playstore' />
                </span>
                <div className="text-white text-xs">
                  <div>GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400">All rights reserved @jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}
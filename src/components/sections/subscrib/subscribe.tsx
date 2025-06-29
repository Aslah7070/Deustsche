
"use client"
import React, { useState } from 'react';

export default function Subscription() {
  const [email, setEmail] = useState('');

  return (
    <div className="  flex items-center justify-center p-4 relative overflow-hidden ">
      
    

     
      <div className="w-full max-w-3xl rounded-2xl  rounded-tl-[100px]  border-2 bg-[#dfd7f9] border-purple-300 p-16 relative z-10">
        
      
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </div>

       
        <div className="text-center "  >
         
          <h2 className="text-2xl font-medium text-gray-600 mb-12 leading-relaxed">
            Subscribe to get information, latest news and other<br />
            interesting offers about Jadoo
          </h2>

         
          <div className="flex items-center justify-center gap-0 max-w-md mx-auto">
        
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-10 py-4 border-2 bg-white border-gray-200 rounded-l-xl focus:outline-none focus:border-orange-400 text-black placeholder-black"
              />
            
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <button className="px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-r-xl transition-colors border-2 border-orange-400 hover:border-orange-500">
              Subscribe
            </button>
          </div>
        </div>

    
      </div>
    </div>
  );
}
// 'use client';
// // import React, { useEffect } from 'react';
// // import useEmblaCarousel from 'embla-carousel-react';
// // import Pattern from './Pattern';
// import Cards from './cards';
// import { motion } from 'framer-motion';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// interface ICategory {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
// }
 
// const CATEGORIES: ICategory[] = [
//   {
//     id: "first",
//     image: "/assets/Group1.png",
//     title: "Calculated Weather",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     id: "seconnd",
//     image: "/assets/Group2.png",  
//     title: "Best Flights",
//     description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },
//   {
//     id: "third",
//     image: "/assets/Group3.png",
//     title: "Local Events",
//     description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
//   },
//   {
//     id: "fourth",
//     image: "/assets/Group3.png",
//     title: "Customization",
//     description: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
//   }
// ];

// function Category() {


//   return (
//     <div className='pt-10 md:pt-20 lg:pt-32 '>
//       <motion.div
//         className='relative space-y-5 md:space-y-10'
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         viewport={{ once: true }}
//       >
//         <p className='text-center text-lg md:text-xl text-[#5e6282] tracking-widest font-sans font-bold'>
//           CATEGORY
//         </p>
//         <h2 className='text-center text-3xl md:text-5xl lg:text-6xl font-serif text-[#181e4b] font-bold'>
//           We Offer Best Services
//         </h2>

//         <div className='md:absolute right-0 top-0 min-w-40 md:block hidden'>
//           {/* <Pattern /> */}
//         </div>

//         <div className='relative px-5'>
//           <div className='overflow-hidden'>
//             <div className='flex  px-15'>
//               {CATEGORIES.map((item, index) => (
//                 <div key={item.id} className='flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0'>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{
//                       delay: index * 0.1,
//                       duration: 0.5,
//                       ease: 'easeOut'
//                     }}
//                     viewport={{ once: true }}
//                   >
//                     <Cards
//                       title={item.title}
//                       image={item.image}
//                       description={item.description}
//                     />
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <motion.button
//             // onClick={scrollPrev}
//             whileTap={{ scale: 0.9 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.4 }}
//             className='absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 z-20 transition-all duration-200'
//             aria-label="Previous slide"
//           >
//            <ArrowBackIosNewIcon/>
//             {/* <IoChevronBack className='w-4 h-4 md:w-6 md:h-6 text-[#181e4b]' /> */}
//           </motion.button>
//           <motion.button
//             // onClick={scrollNext}
//             whileTap={{ scale: 0.9 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.4 }}
//             className='absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 z-20 transition-all duration-200'
//             aria-label="Next slide"
//           >
            
//              <ArrowForwardIosIcon/>
//             {/* <IoChevronForward className='w-4 h-4 md:w-6 md:h-6 text-[#181e4b]' /> */}
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Category;


'use client';
import Cards from './cards';
import { motion } from 'framer-motion';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface ICategory {
  id: string;
  image: string;
  title: string;
  description: string;
}

const CATEGORIES: ICategory[] = [
  {
    id: "first",
    image: "/assets/Group1.png",
    title: "Calculated Weather",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "seconnd",
    image: "/assets/plane.png",
    title: "Best Flights",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "third",
    image: "/assets/Group2.png",
    title: "Local Events",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    id: "fourth",   
    image: "/assets/Group3.png",
    title: "Customization",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
  }
];

function Category() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32 px-4 sm:px-6 lg:px-16 ">
      <motion.div
        className="relative space-y-6 md:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
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
                <motion.div
                  key={item.id}
                  className="w-full sm:w-[45%] lg:w-[22%] min-w-[250px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true }}
                >
                  <Cards
                    title={item.title}
                    image={item.image}
                    description={item.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on small screens */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 z-20 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ArrowBackIosNewIcon />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 z-20 transition-all duration-200"
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Category;

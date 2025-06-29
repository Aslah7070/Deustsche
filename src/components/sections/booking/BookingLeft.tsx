"use client";
import React from 'react';
import { Square, CreditCard, Car } from 'lucide-react';
import { motion, Easing } from 'framer-motion';

const BookingSteps = () => {
  const steps = [
    {
      icon: Square,
      iconBg: 'bg-yellow-400',
      title: 'Choose Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    },
    {
      icon: CreditCard,
      iconBg: 'bg-orange-500',
      title: 'Make Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    },
    {
      icon: Car,
      iconBg: 'bg-teal-600',
      title: 'Reach Airport on Selected Date',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as Easing }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      transition: { duration: 0.3, ease: "easeOut" as Easing }
    }
  };

  return (
    <div className="w-full md:w-2/4 px-4 sm:px-6 lg:px-8 py-12 md:py-20  ">
      <div className="max-w-5xl mx-auto">
       
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-gray-500 text-base md:text-lg mb-2 md:mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Easy and Fast
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Book Your Next Trip<br className="hidden sm:block" />
            In 3 Easy Steps
          </motion.h1>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-10 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                className={`w-12 h-12 sm:w-14 sm:h-14 ${step.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                variants={iconVariants}
                whileHover="hover"
              >
                <step.icon className="w-6 h-6 text-white sm:w-7 sm:h-7" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1">
                  {step.title}
                </motion.h3>
                <motion.p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingSteps;

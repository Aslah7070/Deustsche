


// import Cards from "@/pages/sections/categories/cards";
import Booking from "@/pages/sections/booking/booding";

import Category from "@/pages/sections/categories/categories";
import TestimonialsSection from "@/pages/sections/costomers/main";
import Hero from "@/pages/sections/hero/Hero";
import Navbar from "@/pages/sections/navbar/Navbar";
import Subscription from "@/pages/sections/subscrib/subscribe";
import Testimonial from "@/pages/sections/testimonial/testimonials";

import Travels from "@/pages/sections/travals/Travels";
export default function Home() {
  return (
    <div>
       <Navbar />
      <Hero/>
    <Category/>
    <Travels/>
    <Booking/>
    <Testimonial/>
    <TestimonialsSection/>
    <Subscription/>
    </div>
  );
}

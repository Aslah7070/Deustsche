


// import Cards from "@/pages/sections/categories/cards";
import Booking from "@/components/sections/booking/booding";

import Category from "@/components/sections/categories/categories";
import TestimonialsSection from "@/components/sections/costomers/main";
import Hero from "@/components/sections/hero/Hero";
import Subscription from "@/components/sections/subscrib/subscribe";
import Testimonial from "@/components/sections/testimonial/testimonials";

import Travels from "@/components/sections/travals/Travels";
export default function Home() {
  return (
    <div>
      
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

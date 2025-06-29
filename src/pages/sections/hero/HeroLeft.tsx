// import { Button } from "@/pages/ui/button"
// import Image from "next/image"
// const HeroLeft = () => {
//   return (
//     <div className="w-2/4 text-start  flex  flex-col justify-center items-center" >
// <h1
//   className="
//   text-start
  
//     font-poppins 
//     font-extrabold 
//     text-[20px] 
//     leading-[100%] 
//     tracking-[0.06em] 
//     uppercase 
//     text-orange-600
//   "
// >
//   Best Destinations around the world
// </h1>
// <h1 className="font-bold 
//     text-[#181e4b] 
//     text-[84px] 
//     leading-[89px] 
//     tracking-[-0.04em]">Travel, enjoy <br />
// and live a new <br />
// and full life</h1>

// <p className="tracking-[0.12em] " >Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</p>

// <div className="flex  items-center justify-start   ">
    
// <Button className="font-bold text-center text-md" variant={"secondary"} size={"xl"} rounded={"md"}>Find out more</Button>
// <Image className="" src='/assets/Play_button.png' width={80} height={100} alt=""/>
// <span>Play Demo</span>
// </div>
//     </div>
//   )
// }

// export default HeroLeft


import { Button } from "@/pages/ui/button"
import Image from "next/image"

const HeroLeft = () => {
  return (
    <div className="w-full md:w-2/4 px-4  md:px-0 flex flex-col justify-center items-center text-start">
      <h1
        className="font-poppins font-extrabold text-sm sm:text-md md:text-lg lg:text-xl leading-tight tracking-[0.06em] uppercase text-orange-600 mb-2"
      >
        Best Destinations around the world
      </h1>
<h1 className="font-bold text-[#181e4b] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[84px] leading-tight tracking-[-0.04em] mb-4">
  Travel,&nbsp;
  <span className="relative inline-block">
    enjoy
    {/* SVG underline */}
    <svg
      className="absolute left-0 bottom-[-4px] w-full h-5 lg:h-8"
      viewBox="0 0 200 40"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,20 C50,50 150,-10 200,20"
        stroke="none"
        fill="#fa896b"
      />
    </svg>
  </span>
  <br />
  and live a new <br />
  and full life
</h1>

      <p className="tracking-[0.12em] text-sm sm:text-base mb-6 text-gray-700">
        Built Wicket longer admire do barton vanity itself do in it. <br />
        Preferred to sportsmen it engrossed listening. Park gate <br />
        sell they west hard for the.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="font-bold text-center text-md" variant={"secondary"} size={"xl"} rounded={"md"}>
          Find out more
        </Button>
        <div className="flex items-center gap-2">
          <Image src="/assets/Play_button.png" width={40} height={40} alt="Play Demo" />
          <span className="text-sm sm:text-base font-medium">Play Demo</span>
        </div>
      </div>
    </div>
  )
}

export default HeroLeft

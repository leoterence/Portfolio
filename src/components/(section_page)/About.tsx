export default function About() {

  return (
    <div className="w-screen h-screen bg-white/7 flex flex-col gap-y-8  justify-center relative " id="About">
        <h2 className="text-3xl font-bold text-center sm:py-7  sm:mb-7 md:text-4xl lg:text-5xl lg:-mt-3 ">Education</h2>
        <div className=" hidden sm:block border-2 w-0 h-4/5 mx-auto my-auto border2 rounded -mt-18"></div>
        <div className="hidden sm:block absolute border-2 rounded-full h-3 w-3 border2 BgC2 Cercl top-22 left-1/2 -translate-x-1.5 "> <span className="text-xs -ml-27 -mt-1 block w-28">2023-actuellement</span></div>
       {/* ******** */}
        <div className=" w-72 mx-auto  border py-2 px-7 top-31 rounded-full info1 border-white/15 hover:scale-105 cursor-pointer sm:absolute sm:py-4 sm:px-5 sm:left-1/2 sm:-translate-x-76">
          <h2 className="text-sm font-bold sm:text-end md:text-lg">Université Polytechnique </h2>
          <p className="text-xs sm:text-end md:text-[13px]">Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Repellat assumenda quam <br /> inventore architecto quos delectus.</p>
          <span className="text-sm ml-2 top-2 sm:hidden ">2023 à nos jours</span>
        </div>
        {/* ******** */}

        <div className="hidden sm:block absolute border-2 rounded-full h-3 w-3 border2 BgC2 Cercl top-1/4 left-1/2 -translate-x-1.5 translate-y-10"><span className="text-xs ml-9 -mt-1 block w-28">2023</span></div>
        
        {/* ******** */}
        <div className=" w-72 mx-auto border py-2 px-7  top-29  rounded-full info1 border-white/15 hover:scale-105 cursor-pointer  sm:absolute sm:py-4 sm:px-5  sm:left-1/2 sm:translate-x-4 sm:translate-y-3 sm:top-1/3 ">
          <h2 className="text-sm font-bold sm:text-end md:text-lg">Université Polytechnique </h2>
          <p className="text-xs sm:text-end lg:text-[13px]">Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Repellat assumenda quam <br /> inventore architecto quos delectus.</p>
          <span className="text-sm ml-2 top-2 sm:hidden ">2023</span>
        </div>
        {/* ******** */}
        
        <div className="hidden sm:block absolute border-2 rounded-full h-3 w-3 border2 BgC2 Cercl top-1/2 left-1/2 -translate-x-1.5 "><span className="text-xs -ml-11 -mt-1 block w-28">2020</span></div>
          {/* ******** */}
          <div className=" w-72 mx-auto border py-2 px-7  top-29  rounded-full info1 border-white/15 hover:scale-105 cursor-pointer  sm:absolute sm:top-1/2 sm:py-4 sm:px-5 sm:left-1/2 sm:-translate-x-76 sm:translate-y-10 ">
          <h2 className="text-sm font-bold sm:text-end md:text-lg">Université Polytechnique </h2>
          <p className="text-xs sm:text-end lg:text-[13px]">Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Repellat assumenda quam <br /> inventore architecto quos delectus.</p>
          <span className="text-sm ml-2 top-2 sm:hidden ">2020</span>
        </div>
        {/* ******** */}
        <div className="hidden sm:block absolute border-2 rounded-full h-3 w-3 border2 BgC2 Cercl top-2/3 left-1/2 -translate-x-1.5 translate-y-4"><span className="text-xs ml-9 -mt-1 block w-28">2016</span></div>
          {/* ******** */}
          <div className=" w-72 mx-auto border py-2 px-7  top-29  rounded-full info1 border-white/15 hover:scale-105 cursor-pointer  sm:absolute  sm:top-2/3 sm:left-1/2 sm:py-4 sm:px-5 sm:translate-x-4 sm:translate-y-12 ">
          <h2 className="text-sm font-bold sm:text-end md:text-lg">Université Polytechnique </h2>
          <p className="text-xs sm:text-end lg:text-[13px]">Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Repellat assumenda quam <br /> inventore architecto quos delectus.</p>
          <span className="text-sm ml-2 top-2 sm:hidden ">2016</span>
        </div>
        {/* ******** */}
    </div>
  )
}
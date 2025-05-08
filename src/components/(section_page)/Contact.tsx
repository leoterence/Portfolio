export default function Contact() {
  return (
    <div className="w-screen h-screen py-7  bg-white/7 flex flex-col pt-3" id="Contact">
      <h2 className="text-3xl font-bold text-center sm:py-7  sm:mb-10 md:text-4xl lg:text-5xl">Contact</h2>
      <form action="#" className="flex flex-col gap-y-7 md:flex-row md:justify-around md:items-center lg:justify-center lg:gap-x-15 ">
           <div className="px-8 md:px-0"> 
              <div className="flex flex-col max-w-md  py-2 gap-y-7  mx-auto md:w-80 lg:w-96">
                  <input type="text" placeholder="Full name" className="border py-3 rounded-lg px-2  outline-0 border2"/>
                  <input type="email" placeholder="Email" className="border py-3 rounded-lg px-2  outline-0 border2"/>
                  <input type="text" placeholder="Phone Number" className="border py-3 rounded-lg px-2  outline-0 border2"/>
                  <input type="text"  placeholder="Subjet" className="border py-3 rounded-lg px-2  outline-0 border2"/>
              </div>
            </div>
           <div className="px-8 sm:px-0"> 
                <div className=" flex flex-col gap-y-7 max-w-md mx-auto  md:w-80 lg:w-96">
                    <textarea name="mesage" id="messegae" placeholder="Your message" className="border2 rounded-lg h-56 outline-0 p-3"></textarea>
                    <button type="button" className="border2 w-32 BgC2 py-1 rounded-full text-black sub mx-auto hover:scale-105 active:scale-100">Send message</button>
                  </div>
           </div>
      </form>
    </div>
  )
}
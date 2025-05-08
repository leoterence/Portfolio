import { Images } from "@/asset/Images"
import Image from "next/image"
export default function Projet() {
  return (
    <div className="w-screen  flex flex-col  pt-5 pb-12" id="Projet">
      <h2 className="mb-10 text-3xl font-bold text-center sm:py-7  sm:mb-7 md:text-4xl lg:text-5xl">Projet</h2>
      {/* collection de projet */}
      <div className="max-w-3xl mx-auto">
          <ul className=" flex flex-wrap justify-center items-center  gap-x-7 gap-y-10 lg:justify-around ">
              <li className=" h-64 border border-white/15 rounded-lg w-52">
                  <Image
                  src={Images[1]} 
                  alt="site1"
                  width={100}
                  height={100}
                  className="w-52 rounded-lg  cursor-pointer"
                  quality={100}
        
                  />
                <a href="https://site-ntfs.vercel.app/" target="_blank"  rel="nooper noreferrer" className=" border border-white/20 px-2 py-1 rounded block w-20 mx-auto my-2 hover:scale-110">Voir plus</a>
              </li>
              <li className=" h-64 border border-white/15 rounded-lg w-52">
                  <Image
                  src={Images[1]} 
                  alt="site1"
                  width={100}
                  height={100}
                  className="w-52 rounded-lg  cursor-pointer"
                  quality={100}
        
                  />
                <a href="https://site-ntfs.vercel.app/" target="_blank"  rel="nooper noreferrer" className=" border border-white/20 px-2 py-1 rounded block w-20 mx-auto my-2 hover:scale-110">Voir plus</a>
              </li>
              <li className="hidden sm:block h-64 border border-white/15 rounded-lg w-52">
                  <Image
                  src={Images[1]} 
                  alt="site1"
                  width={100}
                  height={100}
                  className="w-52 rounded-lg  cursor-pointer"
                  quality={100}
        
                  />
                <a href="https://site-ntfs.vercel.app/" target="_blank"  rel="nooper noreferrer" className=" border border-white/20 px-2 py-1 rounded block w-20 mx-auto my-2 hover:scale-110">Voir plus</a>
              </li>
              <li className=" h-64 border border-white/15 rounded-lg w-52">
                  <Image
                  src={Images[1]} 
                  alt="site1"
                  width={100}
                  height={100}
                  className="w-52 rounded-lg  cursor-pointer"
                  quality={100}
        
                  />
                <a href="https://site-ntfs.vercel.app/" target="_blank"  rel="nooper noreferrer" className=" border border-white/20 px-2 py-1 rounded block w-20 mx-auto my-2 hover:scale-110">Voir plus</a>
              </li>
              <li className=" h-64 border border-white/15 rounded-lg w-52">
                  <Image
                  src={Images[1]} 
                  alt="site1"
                  width={100}
                  height={100}
                  className="w-52 rounded-lg  cursor-pointer"
                  quality={100}
        
                  />
                <a href="https://site-ntfs.vercel.app/" target="_blank"  rel="nooper noreferrer" className=" border border-white/20 px-2 py-1 rounded block w-20 mx-auto my-2 hover:scale-110">Voir plus</a>
              </li>
              <li className="hidden sm:block h-64 border border-white/15 rounded-lg w-52">
                  <Image
                  src={Images[1]} 
                  alt="site1"
                  width={100}
                  height={100}
                  className="w-52 rounded-lg  cursor-pointer"
                  quality={100}
        
                  />
                <a href="https://site-ntfs.vercel.app/" target="_blank"  rel="nooper noreferrer" className=" border border-white/20 px-2 py-1 rounded block w-20 mx-auto my-2 hover:scale-110">Voir plus</a>
              </li>
              
          </ul>
      </div>
    </div>
  )
}
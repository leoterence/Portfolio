import { Facebook,Instagram,Twitter,Linkedin } from "lucide-react"
import Link from "next/link"


export default function Footer() {
  return (
    <div className="border-2 border-transparent bg-white/12 p-5 flex flex-col gap-y-3 ">
        {/* section des lien vers les reseaux sociaux */}
        <div >
                {/* conteneur des liens */}
                <ul className="flex flex-row w-60 justify-around mx-auto ">
                        <li className="border1  p-2  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Linkedin  className="h-6 w-6 p-1 BgC1 text-white/80"/></li>
                        <li className="border1  p-2  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Facebook className="h-6 w-6 p-1 BgC1 text-white/80" /></li>
                        <li className="border1  p-2  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Instagram className="h-6 w-6 p-1 Color1 " id="items"/></li>
                        <li className="border1  p-2  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Twitter className="h-6 w-6 p-1 Color1" id="items"/></li>
                </ul>
        </div>

        {/* section des liens de navigation dans la page */}
        <div>
                {/* conteneur des liens */}
                <ul className="flex flex-row justify-around mx-auto my-2 text-sm gap-y-2 sm:w-96 ">
                    <li><Link href="#Home" className="link1">Home</Link></li>
                    <li><Link href="#Service"  className="link2">Services</Link></li>
                    <li><Link href="#About"  className="link3">About Me</Link></li>
                    <li ><Link href="#Contact" className="link4">Contact</Link></li>
                    <li ><Link href="#Testimonials" className="link5">Testimonials</Link></li>
                </ul>
        </div>
        <div>
            <p className="text-center text-sm">&copy; {new Date().getFullYear()} All rigth to Konan Loukou.L </p>
        </div>
    </div>
  )
}
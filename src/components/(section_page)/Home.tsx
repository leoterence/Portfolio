'use client'
import React from 'react'
import { Images } from '@/asset/Images'
import Image from 'next/image'
import { Facebook,Instagram,Twitter,Linkedin } from "lucide-react"
import { useTypewriter,Cursor } from 'react-simple-typewriter'


export default function Home() {
  const[text]=useTypewriter({
    words:['Web Developper','Front-End Developper'],
    delaySpeed:2500,
    loop:0
  })

  return (
    <div className="w-screen h-screen bg-white/5 flex flex-col pl-7 justify-center items-center gap-y-5 sm:flex-row sm:justify-around sm:px-3 " id="Home">
       <div className="  sm:hidden">
        <Image 
        src={Images[0]}
        alt='moi'
        width={100}
        height={100}
        className='w-40 rounded-xl moi1'
        />
      </div>
      <div className='flex flex-col gap-y-2 justify-center'>
        {/* presentation */}
          <div className='flex flex-col gap-y-1'>
            <p className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>Hi,It's <span className='Color2'>Loukou Konan</span></p>
            <p className='text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl'>I'm a <span className='Color2'>{text}</span><span className='Color2'><Cursor /></span></p>
          </div>
          {/* resumer de ma personne */}
          <div>
            <p className='text-xs my-1 sm:text-sm lg:text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Praesentium, repellendus adipisci harum suscipit odit ducimus! <br /> Rem dolores fuga minima distinctio.</p>
          </div>
          {/* mes reseaux */}
          <div>
          <ul className="flex flex-row w-60 justify-around py-1 ">
                        <li className="border1 p-1  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Linkedin  className="h-5 w-5  BgC1 text-white/80"/></li>
                        <li className="border1 p-1  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Facebook className="h-5 w-5  BgC1 text-white/80" /></li>
                        <li className="border1 p-1  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Instagram className="h-5 w-5  " id="items"/></li>
                        <li className="border1  p-1  rounded-full  cursor-pointer hover:scale-125 link transition duration-500 easy "><Twitter className="h-5 w-5 Color1" id="items"/></li>
                </ul>
          </div>
          <div className='mt-2'>
            <ul className='flex flex-row gap-x-6'>
              <li className='border2 rounded-2xl py-1 px-4 linkH Color2'>Hire</li>
              <li className='border2 rounded-2xl py-1 px-4 linkH Color2'>Contact</li>
            </ul>
          </div>
      </div>
      <div className="hidden  sm:block">
        <Image 
        src={Images[0]}
        alt='moi'
        width={100}
        height={100}
        className='w-56  border rounded-full border1 moi1 md:w-64 lg:w-80'
        />
      </div>
    </div>
  )
}
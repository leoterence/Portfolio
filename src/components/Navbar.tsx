'use client'

import { Menu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import clsx from "clsx"



const Links=[
    {name:'Home',lien:"#Home"},
    {name:'Education',lien:"#About"},
    {name:'Projet',lien:"#Projet"},
    {name:'Contact',lien:"#Contact"},

]


export default function Navbar() {
    const[isopen,setisopen]= useState(false)
    const[active,isActive]=useState('Home')

    // permet de savoir si c est le menu qui est cliqué 
    useEffect(()=>{
        const isOpen = (e:MouseEvent)=>{
            const menu = document.getElementById('menu')
            if(menu && !menu.contains(e.target as Node)){
                setisopen(false)
            }
        }
        document.addEventListener('mousedown',isOpen)
        return ()=>{document.removeEventListener('mousedown',isOpen)}
    },[])

    // permet de savoir si la page est redim pour fermer le menu
    
    useEffect(()=>{
        const isRezise= ()=>{
            const menu = document.getElementById('menu')
            if(menu && window.innerWidth>768){
                setisopen(false)
            }
        }
        window.addEventListener('resize',isRezise)
        return ()=>{
            window.removeEventListener('resize',isRezise)
        }

    })
  return (
    <div>
        {/* petit ecran */}
        <nav className="md:hidden" id="menu">
            <Menu className="relative h-7 w-11 " onClick={()=>setisopen(!isopen)}  />
            <ul className={`absolute flex-col gap-y-1 right-2 top-25 border-2 border-white/10 rounded-lg z-50 ${isopen? "flex":"hidden"}`}>
            {Links.map((link,id)=>{
                return(
                    <li key={id}><Link href={link.lien} className="block w-full h-full p-2 navl">{link.name}</Link></li>
                )
            })}
            </ul>
        </nav>

        {/* grand ecran */}
        <nav className="hidden md:block" >
            <ul className={`flex flex-row gap-x-6 pr-4 text-sm lg:text-md xl:text-lg`}>
            {Links.map((link,id)=>{
                return(
                    <li key={id}><Link href={link.lien} className={clsx('navl1',{'Color2':active===link.name})} onClick={()=>isActive(link.name)} >{link.name}</Link></li>
                )
            })}
            </ul>
        </nav>
    </div>
  )
}
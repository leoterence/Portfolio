import Service from "@/components/(section_page)/Projet"
import Contact from "@/components/(section_page)/Contact"
import About from "@/components/(section_page)/About"
import Home from "@/components/(section_page)/Home"


export default function page() {
  return (
    <div>
        <Home />
        <About />
        <Service />
        <Contact />
    </div>
  )
}
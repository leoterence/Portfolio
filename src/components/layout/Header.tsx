import Navbar from "../Navbar"

export default function Header() {
  return (
    <div className="py-9 flex flex-row items-center justify-between px-5 lg:px-14 xl:px-48">
        <div className="text-xl font-semibold ml-5 md:text-2xl lg:text-3xl xl:text-4xl">
            Konan <span className="Color2 T1">Loukou.L</span>
        </div>
        <Navbar />

    </div>
  )
}
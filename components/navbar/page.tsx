"use client"
import { useState } from "react"
import Image from 'next/image'
import img1 from '@/app/assets/bars.svg'
import img2 from '@/app/assets/close.svg'


const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className="w-full top-0 right-0 left-0 fixed bg-[#1e2124] z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <h1 className="text-2xl text-white font-bold font-Poppins font-sans">LOGO</h1>
            </div>
            <div className="md:hidden">
              <button className="p-2 text-gray-600 rounded-md outline-none " onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  
                  <Image src={img1} alt="open" width={30} height={30}   />
                ) : (
                  
                  <Image src={img2} alt="close" width={30} height={30}  className="focus:border-none active:border-none"/>
                  
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
       <div>
        <div className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${navbar ? 'hidden' : "p-4 md:p-0 block"}`}>
          <ul className="h-screen text-zinc-300 text-xl font-sans font-semibold">
            <li><a href="">Discover</a></li>
            <li><a href="">Forum</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Faq</a></li>

          </ul>
        </div>
       </div>
    </nav>
  )
}

export default Navbar
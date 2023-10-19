"use client"
import React, { useState } from 'react'
import style from '@/app/Styles/MenuNav.module.css'
import Link from 'next/link'
import Github from '../Icons/Github' 
import Linkedin from '../Icons/Linkedin'
import MenuIcon from '../Icons/MenuIcon'
import Close from '../Icons/Close'
import { Whatsapp } from '../Icons/Whatsapp'

const MenuMobile = () => {

const [menu, setMenu] = useState(false)

const handleClic = () => {
    setMenu(!menu)
}

  return (
<>
  <nav className=" right-0 h-12  fixed z-[1000] flex items-center justify-end px-4 md:hidden ">
  <button onClick={handleClic}
  className="w-8 h-8  text-slate-50 cursor-pointer md:hidden bg-black flex flex-col items-center justify-center rounded-lg">
{
    menu ? <Close className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />
}

  </button>
  </nav>



<nav className={style.navMobile + " " + (menu ? style.menuOpen : style.menuClose)
}>
  <ul>
    <li>
      <Link href="#" onClick={handleClic}>Inicio</Link>
    </li>
    <li>
      <Link href="#proyectos"  onClick={handleClic}>Servicios</Link>
    </li>
    <li>
      <Link href="#about"  onClick={handleClic} >Nosotros</Link>
    </li>
    <li>
      <Link href="#contacto" onClick={handleClic}>Contacto</Link>
    </li>
  </ul>
  {/* div horizontal: */}
  <div className="flex gap-3 justify-center items-center ">
  
  <a href="https://wa.link/vue922" target="_blank" rel="noopener noreferrer">
  <Whatsapp className="w-10 fill-fercho-400 mr-2
  hover:fill-slate-50 transition-colors ease-in-out
  
  " />
  </a>
  <a href="https://www.linkedin.com/in/luigy/" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-8 text-fercho-400 
    hover:text-slate-50 transition-colors ease-in-out
    " />
  </a>
  </div>
</nav>
</>
  )
}

export default MenuMobile
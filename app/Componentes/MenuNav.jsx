import React from 'react'
import Image from 'next/image'

import estilos from '../Styles/MenuNav.module.css'
import Link from 'next/link'
import Github from '../Icons/Github' 
import Linkedin from '../Icons/Linkedin'
import MenuIcon from '../Icons/MenuIcon'
import MenuMobile from './MenuMobile'
import logo from '@/public/logo-trading.jpg'

const MenuNav = () => {
  return (
<>
<nav className={estilos.nav}>
  <div className="flex align-center items-center">
    <Image src={logo} width={40} height={40} className='rounded-lg object-cover' alt='Logo de winners funds' />
    <span className='text-white'>Winner funds</span>
  </div>


  <ul>
    <li>
      <Link href="/">Inicio</Link>
    </li>
    <li>
      <Link href="/services">Servicios</Link>
    </li>
    <li>
      <Link href="/about">Nosotros</Link>
    </li>
    <li>
      <Link href="/contacto">Contacto</Link>
    </li>
  </ul>

</nav>
<MenuMobile />


</>
  )
}

export default MenuNav


{/*  */}
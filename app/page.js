"use client"

import Image from 'next/image'
import Left_Arrow from './Icons/Left_Arrow'
import Down_Arrow from './Icons/Down_Arrow'
import MenuNav from './Componentes/MenuNav'
import logo from '@/public/logo-trading.jpg'
import Link from 'next/link'
import About from './Secciones/About'
import Contact from './Secciones/Contact'


export default function Home() {
  return (
    <main className='w-full overflow-x-hidden relative'>

      <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center justify-center relative overflow-x-hidden'>

        <Image src={logo} width={120} height={120} className='rounded-full mb-3 object-cover' alt='Logo de winners found' />

          <h1 className='text-slate-50 font-bold uppercase '>WINNERS
          <span className='text-fercho-400'> FUNDS 🏆</span> </h1>

          <h2 className='text-slate-50 font-medium mt-2  '>Trading Forex | Bolsa de valores</h2>

          <Link href="#contacto" className='btn-contact gap-3'>Contáctame <Left_Arrow /></Link>
          <Link href="#about" className='down'> <Down_Arrow   className="text-slate-50 w-10  " /></Link>

      </section>

      <About />
      <Contact />


      <span className='blob '></span>


    </main>
  )
}

// text transformation types in tailwind:
// capitalize
// lowercase
// uppercase
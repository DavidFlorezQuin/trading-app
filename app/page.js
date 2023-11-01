"use client"

import Image from 'next/image'
import { Whatsapp } from './Icons/Whatsapp'
import Left_Arrow from './Icons/Left_Arrow'
import Down_Arrow from './Icons/Down_Arrow'
import MenuNav from './Componentes/MenuNav'
import Linkedin from './Icons/Linkedin'
import logo from '@/public/logo-trading.jpg'
import Link from 'next/link'
import About from './Secciones/About'
import Contact from './Secciones/Contact'
import Working from './Secciones/Working'
import Service from './Secciones/Service'

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden relative'>

      <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center justify-center relative overflow-x-hidden'>

        <Image src={logo} width={120} height={120} className='rounded-full mb-3 object-cover' alt='Logo de winners found' />

        <h1 className='text-slate-50 font-bold uppercase '>WINNERS
          <span className='text-fercho-400'> FUNDS 🏆</span> </h1>

        <h2 className='text-slate-50 font-medium mt-2  '><em>Gana en grande con Forex, gana con nosotros.</em>
        </h2>

        <div className='w-full flex flex-col md:flex-row justify-center gap-3 '>
<a 
href='https://t.me/+34MG0BT5k3wwNDIx'
target='_blank'



className=' bg-smoke-900 text-slate-50
 p-2 rounded-xl gap-1 flex mt-5 
 justify-center items-center
 text-sm font-semibold 
 hover:bg-fercho-300 hover:text-white
transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
active:bg-fercho-400 active:text-slate-900
 
 '>

<Linkedin className='w-5 ' /> Ir a Telegram 

</a>
<a 
href='https://wa.link/vue922'
target='_blank'



className=' bg-smoke-900 text-slate-50
 p-2 rounded-xl gap-1 flex mt-5 
 justify-center items-center
 text-sm font-semibold 
 hover:bg-fercho-300 hover:text-white
transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
active:bg-fercho-400 active:text-slate-900
 
 '>

<Whatsapp className='w-5 ' /> Ir a Whatsapp

</a>
</div>
        <Link href="#about" className='down'> <Down_Arrow className="text-slate-50 w-10  " /></Link>

      </section>

      <Service/>
      <About />
      
      <Working />
      <Contact />


      <span className='blob '></span>


    </main>
  )
}

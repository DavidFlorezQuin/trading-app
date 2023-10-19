"use client"

import Image from 'next/image'
import MenuNav from '../Componentes/MenuNav' 
import logo from '@/public/logo-trading.jpg'
import Link from 'next/link'
import About from '../Secciones/About'
import Contact from '../Secciones/Contact'

export default function Seccion(){
    return(
        <main className='w-full overflow-x-hidden relative'>

        <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center relative overflow-x-hidden'>
  
  
            <h1 className='text-slate-50 mt-36 font-bold uppercase'>Nuestros Servicios </h1>
  
            <h3 className='text-slate-50 font-medium mt-2'>Somos profesionales que te guiarán hacia el éxito financiero.</h3>
  
        </section>
  
  
        <span className='blob '></span>
  
  
      </main>
    );
}
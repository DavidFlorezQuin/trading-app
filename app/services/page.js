"use client"

import MenuNav from '../Componentes/MenuNav' 
import Link from 'next/link'
import Service from '../Secciones/Service'

export default function Seccion(){
    return(
        <main className='w-full overflow-x-hidden relative'>

        <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center relative overflow-x-hidden'>
  
  <div className='w-3/4 text-center'>
            <h1 className='text-slate-50 mt-36 font-bold uppercase'>Nuestros Servicios </h1>
  
            <h3 className='text-slate-50 font-medium mt-5'>Somos profesionales que te guiarán hacia el <span className='text-cyan-400'>éxito financiero.</span></h3>
            </div>
            <Service/>
        </section>
  
  
        <span className='blob '></span>
  
  
      </main>
    );
}
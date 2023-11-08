import React from 'react'   
import Image from 'next/image'
import cel from '@/public/cel-trading.png'
const About = () => {
    return (
        <section
        id='about'
        className='w-full min-h-screen bg-smoke-800 blanco gap-10 flex flex-wrap items-center justify-center p-5'>
            
            {/* div para el contenido con su ancho correspondiente: */}
            <div className='w-full md:w-1/3'>
                <h1 className='text-slate-100 font-bold uppercase '>Descubre tu potencial financiero en el Forex.</h1>
                <p className='text-slate-300 font-light mt-2  text-sm '>¿Alguna vez has soñado con tener el control de tus finanzas y forjar tu camino hacia la independencia financiera? El trading de Forex te brinda la oportunidad de hacer precisamente eso. En el mercado de divisas más grande y líquido del mundo, las posibilidades son infinitas.</p>
            </div>
       
                <div className='flex flex-col items-center relative  md:order-none order-last'>
                    <Image src={cel} width={300} height={300} className='object-cover' alt='logo winners found' />
                    
                </div>


        </section>
    )
}

export default About
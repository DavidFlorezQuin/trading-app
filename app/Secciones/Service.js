import React from 'react'
import Cards from '../Componentes/Cards'

const Service = () => {
    return (
        <section id='service'className='w-full text-center bg-smoke-800 blanco center p-5 '>

            <h2 className='text-slate-50 text-3xl mt-36 font-bold uppercase'>Nuestros Servicios </h2>
            <h3 className='text-slate-50 font-medium mt-5'>Somos profesionales que te guiarán hacia el <span className='text-cyan-400'>éxito financiero.</span></h3>


            <div className='w-full mt-7 flex flex-wrap gap-7 justify-center mx-auto'>

                <Cards
                    imageUrl="https://images.unsplash.com/photo-1579226905180-636b76d96082?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Copy Trading"
                    description="Potencia tus inversiones siguiendo a traders expertos con nuestro servicio de Copytrading. Obtén resultados sin ser un experto en el mercado financiero."
                    url="Services/Copytrading"
                />
                <Cards
                    imageUrl="https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg"
                    title="Gestionar cuentas de fondeo"
                    description="Amplifica tus inversiones con traders expertos y gestión de cuentas de fondeo. No se requiere experiencia. Potencia tus ganancias de forma automática."
                    url="#"
                />
                <Cards
                    imageUrl="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    title="Shooting Star"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat."
                    url="#"
               
               />

            </div>


        </section>
    )
}
export default Service
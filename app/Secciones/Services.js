import React from 'react'
import Cards from '../Componentes/Cards'

const Service = () => {
    return (
        <section
        id='about'
        className='w-full mt-8 bg-smoke-800 blanco gap-10 flex items-center justify-center p-5'>
            
            {/* div para el contenido con su ancho correspondiente: */}
            <div className='w-full md:w-3/4 flex flex-wrap gap-3 justify-center md:justify-between'>

            <Cards
        imageUrl="https://images.unsplash.com/photo-1579226905180-636b76d96082?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Copy Trading"
        description="Potencia tus inversiones siguiendo a traders expertos con nuestro servicio de Copytrading. Obtén resultados sin ser un experto en el mercado financiero."
      />
            <Cards
        imageUrl="https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg"
        title="Gestionar cuentas de fondeo"
        description="Amplifica tus inversiones con traders expertos y gestión de cuentas de fondeo. No se requiere experiencia. Potencia tus ganancias de forma automática."
      />
            <Cards
        imageUrl="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        title="Shooting Star"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat."
      />

            </div>  


        </section>
    )
}
export default Service
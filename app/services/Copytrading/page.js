"use client"

import MyAccordion from '@/app/Componentes/MyAccordion';
import Link from 'next/link'

export default function Seccion() {
    return (
        <main className='w-full overflow-x-hidden relative'>

            <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center relative overflow-x-hidden'>


                <div className='w-3/4 text-start'>
                    <article>
                        <h2 className='text-slate-50 mt-36 text-2xl font-bold uppercase'>¿Qué es? </h2>
                        <p className='text-slate-50 font-normal mt-5'>Copytrading, también conocido como trading social, es una forma de inversión que permite a los inversores seguir y copiar automáticamente las operaciones realizadas por traders experimentados en el mercado. En lugar de operar por sí mismos, los inversores pueden elegir a traders a seguir y duplicar sus estrategias y movimientos en sus propias cuentas de trading.</p>
                    </article>
                    <article className='text-slate-50'>
                        <h2 className='text-slate-50 mt-12 text-2xl font-bold uppercase'>Pasos para iniciar </h2>

                        <ul>
                            <li>
                                Registrarse en el broker <a class target='_blank' className='text-cyan-400 underline' href='https://my.roboforex.com/en/register/?_gl=1*11jvw2b*_ga*MTY0NDc0ODU2OS4xNjk4MjQ3OTUw*_ga_KD23DCYKJK*MTY5ODI0Nzk0OS4xLjAuMTY5ODI0Nzk0OS4wLjAuMA..*_fplc*MzVaRkMlMkYzbFhLZ3ZNM2htMkEzQkJ0ekw0UGRCRUhDY2hneGh4dHY1THczSnF6RnpIWnoxcXEzNFB2Z05ncW93bHB2cmQ4VFhSbUlGZTFjeFp2OEhqZ2hxdE93S2t6MEx3alk4MlkwNTJOQldEcTQ5b3JuN3QwRHc2U1B0UHclM0QlM0Q.'>Robot Forex</a>
                            </li>
                            <li>
                                Crear una cuenta Meta Trader 4 (MT4)
                            </li>
                            <li>
                                Depositar a su cuenta de MT4
                            </li>
                            <li>
                                Ingresa al <a href='http://my.roboforex.com/es/copyfx/providers/show/296423/' target='_blank'>link</a> para sincronizar las cuentas
                            </li>
                        </ul>
                    </article>




                    <h2 className='text-slate-50 mt-14 text-2xl font-bold uppercase'>Beneficios del Copytrading</h2>

                    <p className='text-slate-50 font-normal mt-5'>
                        <span className='font-bold text-cyan-400'>Acceso a la Experiencia Profesional: </span>
                        Obtén acceso inmediato a la experiencia de traders experimentados, incluso si eres un inversor principiante.
                        <p className='text-slate-50 font-normal mt-5'>
                            <span className='font-bold text-cyan-400'>Diversificación de Cartera:</span> Puedes diversificar tus inversiones al seguir a varios traders y estrategias diferentes.
                            <span className='   font-bold text-cyan-400'>Ahorro de Tiempo:</span> No es necesario realizar un análisis constante del mercado; el copytrading se encarga de ello automáticamente.
                            <span className='font-bold text-cyan-400'>Control Total: </span>
                            Mantienes el control total sobre tu cuenta y puedes ajustar o detener las operaciones en cualquier momento.
                            <span className='font-bold text-cyan-400'>Aprendizaje Continuo: </span>
                            Observa y aprende de los traders que sigues para mejorar tus habilidades de inversión
                        </p>
                    </p>
                </div>

            <article className='text-white w-3/4 my-40'>
            <MyAccordion/>
            </article>
            </section>



            <span className='blob '></span>


        </main>
    );
}
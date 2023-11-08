"use client"

import MiniCards from '@/app/Componentes/MiniCards';
import MyAccordion from '@/app/Componentes/MyAccordion';
import Image from 'next/image'
import cohete from '@/public/cohete_up.png';


export default function Seccion() {
    return (
        <main className='w-full overflow-x-hidden relative'>

            <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center relative overflow-x-hidden'>


                <div className='w-3/4 text-start'>
                    <article>
                        <h2 className='text-slate-50 mt-36 text-2xl font-bold uppercase'>¿Qué es el copytradingmf? </h2>
                        <p className='text-slate-50 font-normal mt-5'>Copytrading, también conocido como trading social, es una forma de inversión que permite a los inversores seguir y copiar automáticamente las operaciones realizadas por traders experimentados en el mercado. En lugar de operar por sí mismos, los inversores pueden elegir a traders a seguir y duplicar sus estrategias y movimientos en sus propias cuentas de trading.</p>
                    </article>
                    
                    <article className='text-slate-50'>

                        <h2 className='text-slate-50 mt-12 text-2xl font-bold uppercase'>Pasos para iniciar </h2>

                        <ul>
                            <li className='h-20 flex gap-4 items-center'>
                                <span className='border shadow-cyan-300 shadow-md rounded-full w-12 flex justify-center items-center h-12'>1</span>
                                <p> Registrarse en el broker <a class target='_blank' className='text-cyan-400 underline' href='https://acortar.link/iDWOOx'>Robot Forex</a></p>
                            </li>

                            <li className='h-20 flex gap-4 items-center'>
                                <span className='border shadow-cyan-300 shadow-md rounded-full w-12 flex justify-center items-center h-12'>2</span>
                                <p>Crear una cuenta Meta Trader 4 (MT4)</p>
                            </li>
                            <li className='h-20 flex gap-4 items-center'>
                                <span className='border shadow-cyan-300 shadow-md rounded-full w-12 flex justify-center items-center h-12'>3</span>
                                Depositar a su cuenta de MT4
                            </li>
                            <li className='h-20 flex gap-4 items-center'>
                                <span className='border shadow-cyan-300 shadow-md rounded-full w-12 flex justify-center items-center h-12'>4</span>
                               <p>Ingresa al<a href='http://my.roboforex.com/es/copyfx/providers/show/296423/' className='px-2 text-cyan-400 underline' target='_blank'>link</a>para sincronizar las cuentas</p>
                            </li>
                        </ul>
                    </article>



                    <h2 className='text-slate-50 mt-14 text-2xl font-bold uppercase'>Beneficios del Copytrading</h2>

                    <section className='flex justify-around flex-wrap mt-11'>

                        <div className='flex flex-col gap-9'>
                            <MiniCards
                                num="1"
                                title="Experiencia Profesional"
                                description="Obtén acceso inmediato a la experiencia de traders experimentados, incluso si eres un inversor principiante."
                            />
                            <MiniCards
                                num="2"
                                title="Diversificación de Cartera"
                                description="Puedes diversificar tus inversiones al seguir a varios traders y estrategias diferentes."
                            />
                        </div>
                            <div className='self-center'>
                            <Image src={cohete} width={300} height={120} className='' alt='Logo de winners found' />
                            </div>

                            <div className='flex flex-col gap-9'>

                        <MiniCards
                            num="3"
                            title="Ahorro de Tiempo"
                            description="No es necesario realizar un análisis constante del mercado; el copytrading se encarga de ello automáticamente."
                            />
                        <MiniCards
                            num="4"
                            title="Control Total"
                            description="Mantienes el control total sobre tu cuenta y puedes ajustar o detener las operaciones en cualquier momento."
                            />
                            </div>

                    </section>
                </div>

                <article className='text-white w-3/4 my-40'>
                    <h2 className='text-slate-50 text-2xl font-bold uppercase'>Preguntas frecuentes</h2>
                    <MyAccordion />
                </article>
            </section>



            <span className='blob '></span>


        </main>
    );
}
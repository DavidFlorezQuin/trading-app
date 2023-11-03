"use client"

import MiniCards from '@/app/Componentes/MiniCards';
import MyAccordion from '@/app/Componentes/MyAccordion';

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
                                Ingresa al<a href='http://my.roboforex.com/es/copyfx/providers/show/296423/' target='_blank'>link</a>para sincronizar las cuentas
                            </li>
                        </ul>
                    </article>



                    <h2 className='text-slate-50 mt-14 text-2xl font-bold uppercase'>Beneficios del Copytrading</h2>
                    <section className='flex gap-4 flex-wrap mt-11'>
                    <MiniCards
                        title="Acceso a la Experiencia Profesional: "
                        description="Obtén acceso inmediato a la experiencia de traders experimentados, incluso si eres un inversor principiante."
                    />
                    <MiniCards
                        title="Diversificación de Cartera"
                        description="Puedes diversificar tus inversiones al seguir a varios traders y estrategias diferentes."
                    />
                    <MiniCards
                        title="Ahorro de Tiempo"
                        description="No es necesario realizar un análisis constante del mercado; el copytrading se encarga de ello automáticamente."
                    />
                    <MiniCards
                        title="Control Total"
                        description="Mantienes el control total sobre tu cuenta y puedes ajustar o detener las operaciones en cualquier momento."
                    />
                    <MiniCards
                        title="Aprendizaje Continuo"
                        description="Observa y aprende de los traders que sigues para mejorar tus habilidades de inversión."
                    />
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
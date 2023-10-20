"use client"

import IconChartBar from "../Icons/IconChartBar";
import IconFund from "../Icons/IconFund";
import IconInfo from "../Icons/IconInfo";

export default function Working() {
    return (
        <main className='w-full relative'>

            <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center relative overflow-x-hidden'>

                <div className='w-3/5 text-center'>
                    <h3 className='font-medium text-cyan-400'>Empecemos</h3>

                    <h1 className='text-slate-50 font-bold my-3 uppercase'>Cómo trabajamos</h1>

                    <h3 className='text-sm text-slate-50 font-normal mt-5'>En Winners Funds, priorizamos la seguridad, la innovación y la diversificación. Ofrecemos tecnología avanzada, medidas de seguridad sólidas y una amplia gama de oportunidades de inversión. Nuestro compromiso es ayudarte a prosperar en el mundo del trading de Forex y activos financieros. Tu éxito es nuestra prioridad.

                        <div className="flex justify-between mt-10">
                            <div className="bg-slate-800 grid place-content-center p-5 w-72 rounded-md">

                                <div className="bg-slate-500 rounded-full mx-auto w-16 h-16 p-3 grid place-content-center">
                                    <IconFund className="w-6" />
                                </div>

                                <h2 className="text-xl my-3">Seguridad y Confianza</h2>
                                <p className="font-light">Nuestra prioridad es que te sientas seguro y confiado en tus inversiones. Implementamos medidas de seguridad rigurosas para proteger tus activos y datos.</p>
                            </div>

                            <div className="bg-slate-800 grid place-content-center p-5 w-72 rounded-md">

                                <div className="bg-slate-500 rounded-full mx-auto w-16 h-16 p-3 grid place-content-center">
                                    <IconInfo className="w-4" />
                                </div>

                                <h2 className="text-xl  my-3">Claridad y Educación</h2>
                                <p className="font-light">Creemos en la transparencia y la educación. Proporcionamos a nuestros clientes información completa y herramientas educativas para empoderarlos en sus decisiones de inversión.</p>
                            </div>
                            <div className="bg-slate-800 grid place-content-center p-5 w-72 rounded-md">

                                <div className="bg-slate-500 rounded-full mx-auto w-16 h-16 p-3 grid place-content-center">
                                    <IconChartBar className="w-6" />
                                </div>

                                <h2 className="text-xl my-3">Tecnología Innovadora:</h2>
                                <p className="font-light">Creemos en la transparencia y la educación. Proporcionamos a nuestros clientes información completa y herramientas educativas para empoderarlos en sus decisiones de inversión.</p>
                            </div>
                        </div>



                    </h3>
                </div>
            </section>

            <span className='blob '></span>


        </main>
    );
}
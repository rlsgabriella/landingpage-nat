export default function About() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                                alt="Natalier Júnior com a câmera"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative block */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-tomato-500 rounded-[3rem] -z-10 rotate-6 opacity-20 hidden md:block"></div>
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-fern-500 rounded-full -z-10 opacity-20 hidden md:block"></div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gunmetal-900 mb-8 leading-tight">
                            Muito prazer, <br />
                            <span className="text-tomato-500">sou o Natalier Júnior.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gunmetal-600 font-light leading-relaxed">
                            <p>
                                Minha jornada com a imagem começou há 6 anos, quando a curiosidade esbarrou em uma câmera e transformou minha forma de enxergar o mundo.
                            </p>
                            <p>
                                Neste tempo, compreendi que registrar é muito mais do que apontar a lente; é ter uma <strong className="font-medium text-gunmetal-900">escuta atenta e intencional</strong> sobre a necessidade de quem está do outro lado.
                            </p>
                            <p>
                                Felizmente pude unir o universo técnico e analítico à fluidez orgânica da imagem, um equilíbrio que torna o meu trabalho robusto e, ao mesmo tempo, sensível.
                            </p>
                            <p className="border-l-4 border-tomato-500 pl-6 italic font-medium text-gunmetal-800">
                                Por isso, me dedico a contar histórias: acredito que as engrenagens que movem o seu negócio e a sua vida merecem permanecer lembradas.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

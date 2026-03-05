export default function About() {
    return (
        <section className="py-12 md:py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-14 items-center justify-center">

                    <div className="relative w-full max-w-[200px] sm:max-w-xs md:max-w-md lg:w-[400px] shrink-0">
                        <div className="aspect-square md:aspect-[4/5] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl relative z-10">
                            <img
                                src="/about-natalier.jpg"
                                alt="Natalier Júnior com a câmera"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative block */}
                        <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-48 h-48 lg:w-64 lg:h-64 bg-tomato-500 rounded-[3rem] -z-10 rotate-6 opacity-20 hidden md:block"></div>
                        <div className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 w-24 h-24 lg:w-32 lg:h-32 bg-fern-500 rounded-full -z-10 opacity-20 hidden md:block"></div>
                    </div>

                    <div className="text-center lg:text-left mt-2 md:mt-0 flex-1 max-w-2xl">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gunmetal-900 mb-3 md:mb-8 leading-tight">
                            Muito prazer, <br className="hidden lg:block" />
                            <span className="text-tomato-500">sou o Natalier Júnior.</span>
                        </h2>

                        <div className="space-y-3 md:space-y-6 text-[0.9rem] sm:text-base md:text-lg text-gunmetal-600 font-light leading-snug md:leading-relaxed text-justify lg:text-left">
                            <p>
                                Minha jornada com a imagem começou há 6 anos, quando a curiosidade esbarrou em uma câmera e transformou minha forma de enxergar o mundo.
                            </p>
                            <p>
                                Neste tempo, compreendi que registrar é muito mais do que apontar a lente; é ter uma <strong className="font-medium text-gunmetal-900">escuta atenta e intencional</strong> sobre a necessidade de quem está do outro lado.
                            </p>
                            <p className="hidden md:block">
                                Felizmente pude unir o universo técnico e analítico à fluidez orgânica da imagem, um equilíbrio que torna o meu trabalho robusto e, ao mesmo tempo, sensível.
                            </p>
                            <p className="border-l-2 md:border-l-4 border-tomato-500 pl-3 md:pl-6 italic font-medium text-gunmetal-800 text-xs sm:text-sm md:text-base text-left">
                                Por isso, me dedico a contar histórias: acredito que as engrenagens que movem o seu negócio e a sua vida merecem permanecer lembradas.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

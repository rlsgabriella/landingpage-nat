import React from 'react';

const SportsProject: React.FC = () => {
    return (
        <section id="frx" className="relative w-full bg-[#0b0b0b] overflow-hidden">
            {/* O flex-col atua no mobile (criando o empilhamento). No lg, volta a ser block para preservar as posições absolutas */}
            <div className="relative w-full max-w-[1920px] mx-auto flex flex-col lg:block py-16 lg:py-0 gap-8 min-h-screen lg:min-h-0">

                {/* ---------------- BACKGROUNDS ---------------- */}
                {/* Background para Desktop: dita a proporção/altura da seção para manter a compatibilidade com posições absolutas */}
                <img
                    src="/background-frx.jpeg"
                    alt="Projeto FRX Fotografia Esportiva"
                    className="hidden lg:block w-full h-auto relative z-0"
                />

                {/* Background para Mobile: cover para moldura dos grafismos sem amassar */}
                <div className="absolute inset-0 z-0 lg:hidden">
                    <img
                        src="/background-frx.jpeg"
                        alt="Background Mobile Fundo"
                        className="w-full h-full object-cover object-center opacity-80"
                    />
                    <div className="absolute inset-0 bg-[#0b0b0b]/40"></div>
                </div>

                {/* ---------------- 1. TÍTULO ---------------- */}
                <h2
                    className="
                        relative lg:absolute z-20 
                        text-center lg:text-left text-white 
                        text-3xl sm:text-4xl lg:text-[4rem] xl:text-[4.5rem] 
                        font-black font-sans tracking-tight leading-[0.9] uppercase 
                        [text-shadow:0_10px_30px_rgba(0,0,0,0.9)] 
                        w-full lg:w-min whitespace-normal
                        px-4 lg:px-0
                        lg:top-[20%] lg:left-[30%]
                        order-1 lg:order-none
                    "
                >
                    FOTOGRAFIA ESPORTIVA
                </h2>

                {/* ---------------- 2. GALERIA (Empilhada no meio no Mobile, Direita no Desktop) ---------------- */}
                <div
                    className="
                        relative lg:absolute z-10 
                        w-[90%] mx-auto lg:mx-0 
                        lg:w-[32.5%] lg:h-[61%] 
                        rounded-2xl lg:rounded-[2.5%] overflow-hidden shadow-2xl
                        order-2 lg:order-none
                        lg:top-[19.5%] lg:right-[7.8%]
                    "
                >
                    <img
                        src="/img-frx.jpg"
                        alt="Galeria Fotografia Esportiva"
                        className="w-full h-auto lg:h-full object-cover transition-transform duration-[400ms] ease-in-out hover:scale-105 cursor-pointer aspect-square lg:aspect-auto"
                    />
                </div>

                {/* ---------------- 3. TEXTO E BOTÃO (Base no Mobile) ---------------- */}
                <div
                    className="
                        relative lg:absolute z-20 
                        flex flex-col items-center lg:items-start justify-center 
                        w-[90%] lg:w-[35%] xl:w-[28%] 
                        mx-auto lg:mx-0
                        order-3 lg:order-none
                        lg:top-[70%] lg:left-[30%] lg:-translate-y-1/2
                    "
                >
                    <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-bold font-sans tracking-wide [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] text-center lg:text-left mb-6 w-full px-2 lg:px-0">
                        Capturando a essência da alta performance.
                    </p>

                    <a
                        href="https://www.instagram.com/ofotograforx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" mx-auto md:mx-0 md:ml-20 inline-flex items-center justify-center px-6 py-3 lg:px-10 lg:py-4 rounded-full font-bold text-white text-sm lg:text-lg tracking-wide transition-all duration-300 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95"
                    >
                        Explorar projeto de elite
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SportsProject;

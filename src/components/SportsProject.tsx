import React from 'react';

const SportsProject: React.FC = () => {
    return (
        <section className="relative bg-[#0b0b0b] min-h-[100vh] lg:min-h-[850px] flex items-center overflow-hidden py-24 px-6 sm:px-12 lg:px-24">
            {/* Repeating Pattern Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: 'url("/logo-frx.jpg")',
                    backgroundSize: 'clamp(350px, 40vw, 800px)',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'top left'
                }}
            >
                {/* Dark masking gradient to fade the pattern gradually towards the right where content sits - Softened */}
                <div className="absolute inset-0 bg-black/20 lg:bg-gradient-to-r lg:from-transparent lg:via-[#0b0b0b]/60 lg:to-[#0b0b0b]/80 opacity-90 lg:opacity-100" />
            </div>

            {/* Main Content Container - Pushed to the right on large screens */}
            <div className="relative z-10 w-full max-w-[1500px] mx-auto flex justify-center lg:justify-end items-center h-full">

                {/* Content Area (Takes up roughly right 70% of the screen) */}
                <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center pt-12 lg:pt-0">

                    {/* Inner Left: Centered Text, Subtitle, and Button */}
                    <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 py-8 px-4 sm:py-12 sm:px-8 h-auto w-full order-2 lg:order-1 self-center w-full">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center tracking-tight leading-[1] [text-shadow:0_0_40px_rgba(0,0,0,1)] shadow-black/80 drop-shadow-[0_8px_15px_rgba(0,0,0,0.9)]">
                                Fotografia <br /> Esportiva
                            </h2>
                            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium font-sans tracking-wide [text-shadow:0_0_20px_rgba(0,0,0,1)] text-center">
                                Capturando a Essência da Alta Performance.
                            </p>
                        </div>

                        <a
                            href="https://www.instagram.com/ofotograforx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm [text-shadow:0_0_10px_rgba(0,0,0,0.8)]"
                        >
                            Explorar projeto de elite
                        </a>
                    </div>

                    {/* Inner Right: Single Collage Image (Enlarged and optionally reduced size from flex container) */}
                    <div className="w-full max-w-xl mx-auto flex justify-center lg:justify-end order-1 lg:order-2 self-center">
                        <div className="relative w-full shadow-[0_0_50px_rgba(0,0,0,1)] bg-[#0b0b0b] rounded-[1.5rem] overflow-hidden">
                            <img
                                src="/img-frx.jpg"
                                className="w-full h-auto object-contain hover:scale-[1.03] transition-transform duration-500 rounded-[1.5rem]"
                                alt="Fotografia Esportiva"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SportsProject;

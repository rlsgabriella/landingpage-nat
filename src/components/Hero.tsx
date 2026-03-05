import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-gunmetal-900">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-gunmetal-900/80 via-gunmetal-900/50 to-gunmetal-900/90 z-10" />
                <iframe
                    className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-70"
                    src="https://www.youtube.com/embed/caOAsIC2R-4?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=caOAsIC2R-4&modestbranding=1&playsinline=1&rel=0"
                    allow="autoplay; encrypted-media"
                    title="Background Video"
                />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-soft-linen-50 mb-6 drop-shadow-sm animate-fade-in-up">
                    Dar vida às <span className="text-tomato-500 bg-clip-text">suas ideias.</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-soft-linen-200 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-150">
                    Planos no papel são apenas o início da jornada.
                    Construí-los com voz e personalidade é a garantia de que a trajetória será valiosa.  </p>

                <div className="mt-12 flex gap-4 animate-fade-in-up animation-delay-300">
                    <button
                        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-2 bg-tomato-500 text-white px-8 py-4 rounded-full font-medium hover:bg-tomato-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-tomato-500/30 cursor-pointer"
                    >
                        Conhecer o trabalho
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Scroll indicator down */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-[30px] h-[50px] rounded-full border-2 border-soft-linen-400 flex justify-center p-1">
                    <div className="w-1 h-3 bg-soft-linen-300 rounded-full animate-scroll-down"></div>
                </div>
            </div>
        </div>
    );
}

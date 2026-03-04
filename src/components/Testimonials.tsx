import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
    {
        quote: "Recomendo com segurança. Profissional extremamente competente, organizado e comprometido com prazos. Sensível ao que a marca deseja comunicar, entrega em fotos e vídeos exatamente a essência do momento, com qualidade impecável e alto nível de profissionalismo.",
        name: "Camila Mesquita",
        role: "Founder da Causei Moda Fitness"
    },
    {
        quote: "O fotógrafo que transforma as fotos em emoções. O melhor fotógrafo esportivo da região. 👏🏻👏🏻👏🏻.",
        name: "Valdir Júnior",
        role: "Coach Crossfit e Hyrox"
    },
    {
        quote: "Superou minhas expectativas em todos os aspectos. Atendimento profissional, organização impecável e muita atenção aos detalhes. O resultado final apresentou alta qualidade técnica e sensibilidade artística. Recomendo com confiança.",
        name: "Mariana Ximenes",
        role: "Engenheira Civil"
    },
    {
        quote: "Excelência na qualidade das fotos e rapidez na entrega! Somente elogios ao serviço como um todo 👏🏻.",
        name: "Luana da Silva Dias",
        role: "Advogada"
    },
    {
        quote: "Trabalho excelente, sempre que contrato me impressiono com a capacidade de entender e traduzir aquilo que eu peço como uma obra de arte, sempre que preciso de material recorro ao Natalier pela excelência e simpatia!",
        name: "Ana Luísa Tell",
        role: "Social Media em Sobral"
    }
];

export default function Testimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth > 640 ? 424 : window.innerWidth * 0.85; // card width + gap
            const currentScroll = scrollContainerRef.current.scrollLeft;

            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-24 bg-soft-linen-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-tomato-600 tracking-wider uppercase mb-3">Avaliações reais no Google</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gunmetal-900">A voz de quem confia</h3>
                </div>

                {/* Auto-scrolling carousel setup for reviews - simplified grid for now */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth relative z-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((test, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-platinum-100 flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col relative hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#f06542" className="text-tomato-400" />
                                ))}
                            </div>
                            <p className="text-gunmetal-700 italic font-light mb-8 leading-relaxed flex-grow">
                                "{test.quote}"
                            </p>
                            <div className="border-t border-platinum-100 pt-6 mt-auto">
                                <p className="font-bold text-gunmetal-900">{test.name}</p>
                                <p className="text-sm text-gunmetal-500">{test.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center mt-6 gap-6 relative z-20">
                    <button
                        onClick={() => scroll('left')}
                        className="w-14 h-14 rounded-full bg-gunmetal-900 text-white flex items-center justify-center hover:bg-gunmetal-800 hover:scale-105 active:scale-95 transition-all shadow-md group border border-gunmetal-900 cursor-pointer"
                        aria-label="Avaliação anterior"
                    >
                        <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    {/* Visual hint for scrolling on desktop */}
                    <div className="hidden md:flex w-24 h-1 bg-platinum-200 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-gunmetal-900 rounded-full animate-pulse"></div>
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="w-14 h-14 rounded-full bg-gunmetal-900 text-white flex items-center justify-center hover:bg-gunmetal-800 hover:scale-105 active:scale-95 transition-all shadow-md group border border-gunmetal-900 cursor-pointer"
                        aria-label="Próxima avaliação"
                    >
                        <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}

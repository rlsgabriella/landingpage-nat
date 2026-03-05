import { Camera, Film, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const categories = [
    {
        title: 'Fotografia',
        description: 'Construindo narrativas visuais sólidas. Cobertura de eventos corporativos, retratos profissionais e editoriais que transmitem a verdadeira essência da sua marca.',
        icon: Camera,
        glowColor: 'rgba(116, 167, 88, 0.4)', // fern-500
        iconBg: 'bg-fern-500/10',
        iconColor: 'text-fern-500'
    },
    {
        title: 'Vídeo',
        description: 'Filmes institucionais, documentários e conteúdo dinâmico para redes sociais. Traduzindo complexidade em experiências cinematográficas fluidas.',
        icon: Film,
        glowColor: 'rgba(255, 69, 0, 0.4)', // vibrant-orange
        iconBg: 'bg-[#FF4500]/10',
        iconColor: 'text-[#FF4500]'
    },
    {
        title: 'Consultoria',
        description: 'Direção criativa detalhista para marcas e profissionais. Orientação tática para elevar o posicionamento visual e a comunicação estética do seu projeto.',
        icon: Lightbulb,
        glowColor: 'rgba(255, 255, 255, 0.3)', // white
        iconBg: 'bg-white/10',
        iconColor: 'text-white'
    }
];

export default function Categories() {
    const containerRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const elements = cardsRef.current.filter(Boolean);

        // Stagger entrance animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(elements,
                        { y: 80, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: 0.15,
                            ease: "power3.out",
                        }
                    );
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, { scope: containerRef });

    const handleMouseEnter = (index: number) => {
        const card = cardsRef.current[index];
        if (!card) return;

        gsap.to(card, {
            boxShadow: `0 10px 40px -10px rgba(255, 255, 255, 0.15)`,
            borderColor: 'rgba(255, 255, 255, 0.3)',
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (index: number) => {
        const card = cardsRef.current[index];
        if (!card) return;

        gsap.to(card, {
            boxShadow: "0 0px 0px 0px rgba(0,0,0,0)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    return (
        <section
            className="py-32 bg-obsidian text-white relative overflow-hidden"
            ref={containerRef}
            style={{ backgroundColor: 'var(--color-obsidian)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-vibrant-orange)' }}>
                        O que eu faço
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                        Categorias de Atuação
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className="p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative flex flex-col will-change-transform opacity-0 cursor-pointer"
                        >
                            <div className="relative z-10 flex-grow flex flex-col">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 ${cat.iconBg} ${cat.iconColor} transition-colors duration-500`}>
                                    <cat.icon size={24} strokeWidth={1.5} />
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                    {cat.title}
                                </h4>

                                <p className="leading-relaxed text-platinum-300 font-light">
                                    {cat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

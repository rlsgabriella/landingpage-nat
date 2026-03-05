import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-gunmetal-950/90 backdrop-blur-md shadow-lg py-4 border-b border-gunmetal-800/50'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo/Name - Top Left */}
                <div
                    onClick={() => scrollToSection('top')}
                    className={`cursor-pointer transition-colors flex flex-col ${scrolled ? 'text-white' : 'text-soft-linen-50 drop-shadow-md'
                        }`}
                >
                    <span className="font-bold text-xl tracking-tight leading-none">
                        Natalier <span className="text-tomato-500 font-extrabold">Júnior</span>
                    </span>
                    <span className={`text-[0.65rem] font-medium tracking-[0.2em] uppercase mt-1 ${scrolled ? 'text-platinum-300' : 'text-soft-linen-200'}`}>
                        Audiovisual Estratégico
                    </span>
                </div>

                {/* Navigation Links - Top Right */}
                <div className="flex items-center gap-1 xl:gap-2">
                    {[
                        { id: 'top', label: 'Início', mobileClass: '' },
                        { id: 'sobre-mim', label: 'Quem sou eu', mobileClass: 'hidden md:inline-block' },
                        { id: 'portfolio', label: 'Portfólio', mobileClass: 'hidden md:inline-block' },
                        { id: 'avaliacoes', label: 'Avaliações', mobileClass: 'hidden md:inline-block' },
                        { id: 'parceiros', label: 'Parceiros', mobileClass: 'hidden lg:inline-block' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`${item.mobileClass} px-3 lg:px-4 py-2 rounded-full font-medium text-sm transition-all ${scrolled
                                ? 'text-platinum-200 hover:text-white hover:bg-gunmetal-800'
                                : 'text-platinum-100/90 hover:text-white hover:bg-gunmetal-950/30'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}

                    <button
                        onClick={() => scrollToSection('offer')}
                        className="ml-1 sm:ml-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all bg-tomato-500 text-white hover:bg-tomato-600 hover:scale-105 active:scale-95 shadow-md shadow-tomato-500/20"
                    >
                        Contato
                    </button>
                </div>
            </div>
        </nav>
    );
}

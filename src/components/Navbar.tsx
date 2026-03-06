import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false); // Close menu on click
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'top', label: 'Início' },
        { id: 'sobre-mim', label: 'Quem sou eu' },
        { id: 'frx', label: 'FRX' },
        { id: 'avaliacoes', label: 'Avaliações' },
        { id: 'parceiros', label: 'Parceiros' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen
                ? 'bg-gunmetal-950/90 backdrop-blur-md shadow-lg py-4 border-b border-gunmetal-800/50'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
                {/* Logo/Name - Top Left */}
                <div
                    onClick={() => scrollToSection('top')}
                    className={`cursor-pointer transition-colors flex flex-col z-50 ${scrolled || isMobileMenuOpen ? 'text-white' : 'text-soft-linen-50 drop-shadow-md'
                        }`}
                >
                    <span className="font-bold text-xl tracking-tight leading-none">
                        Natalier <span className="text-tomato-500 font-extrabold">Júnior</span>
                    </span>
                    <span className={`text-[0.65rem] font-medium tracking-[0.2em] uppercase mt-1 ${scrolled || isMobileMenuOpen ? 'text-platinum-300' : 'text-soft-linen-200'}`}>
                        Audiovisual Estratégico
                    </span>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-1 xl:gap-2">
                    {navLinks.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 lg:px-4 py-2 rounded-full font-medium text-sm transition-all ${scrolled
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

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden flex items-center z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 rounded-full transition-colors ${scrolled || isMobileMenuOpen ? 'text-white hover:bg-gunmetal-800' : 'text-white drop-shadow-md'}`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Navigation Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-gunmetal-950/95 backdrop-blur-xl border border-gunmetal-800/50 rounded-2xl shadow-2xl p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 origin-top z-40">
                        {navLinks.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left px-4 py-3 rounded-xl font-medium text-base text-platinum-100 hover:text-white hover:bg-gunmetal-800/80 transition-all"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('offer')}
                            className="mt-2 text-center px-4 py-3.5 rounded-xl font-bold text-base bg-tomato-500/10 text-tomato-500 hover:bg-tomato-500 hover:text-white transition-all border border-tomato-500/20 shadow-lg shadow-tomato-500/5"
                        >
                            Contato
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

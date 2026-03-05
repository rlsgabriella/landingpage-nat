const logos = [
    <img key="1" src="/logo-alan-wells.png" alt="Alan Wells" className="h-16 md:h-20 w-auto object-contain shrink-0" />,
    <img key="2" src="/logo-cafe-jeri.png" alt="Café Jeri" className="h-24 md:h-32 w-auto object-contain shrink-0" />,
    <img key="3" src="/logo-bloomberg.png" alt="Bloomberg Philanthropies" className="h-10 md:h-14 w-auto object-contain shrink-0" />,
    <img key="4" src="/logo-coimbra.png" alt="Coimbra Academy" className="h-16 md:h-20 w-auto object-contain shrink-0" />,
    <img key="5" src="/logo-coreau.png" alt="Prefeitura de Coreaú" className="h-12 md:h-16 w-auto object-contain shrink-0 -translate-y-2" />,
    <img key="6" src="/logo-sobral.png" alt="Prefeitura de Sobral" className="h-10 md:h-14 w-auto object-contain shrink-0" />,
];

export default function BrandsMarquee() {
    return (
        <section className="py-12 bg-[#1A1C20] overflow-hidden border-y border-white/5">
            <div className="relative flex w-full">
                {/* Gradient Masks for smooth fade on edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-[#1A1C20] to-transparent pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-[#1A1C20] to-transparent pointer-events-none"></div>

                <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center">
                    {/* Double the array for seamless infinite scroll */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                        <div key={i} className="flex-none w-48 mx-8 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

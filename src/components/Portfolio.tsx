const projects = [
    {
        category: 'Documentário Institucional',
        title: 'JOVENS PELO CLIMA 2025',
        image: '/jovens-pelo-clima.jpg'
    },
    {
        category: 'Material Empresarial',
        title: 'VULKAN STRENGTH',
        image: '/material-empresarial.jpg'
    },
    {
        category: 'Produção de Conteúdo',
        title: 'NUTRICIONISTA, AYMI LINHARES',
        image: '/aymi-linhares.jpg'
    },
    {
        category: 'Fotografia Esportiva',
        title: 'SEROOCLUB',
        image: '/fotografia-esportiva.jpg'
    },
    {
        category: 'Fotografia Corporativa',
        title: 'ABERTURA CÂMARA DE VEREADORES DE COREAÚ 2026',
        image: '/camara-coreau.jpg'
    },
    {
        category: 'Eventos',
        title: 'VIRADA DE ANO CAFÉ JERI',
        image: '/virada-cafe-jeri.png'
    }
];

export default function Portfolio() {
    return (
        <section className="py-24 bg-gunmetal-950 text-white" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-semibold text-tomato-500 tracking-wider uppercase mb-3">Portfólio</h2>
                        <h3 className="text-3xl md:text-5xl font-bold">Projetos Recentes</h3>
                    </div>
                    <p className="text-platinum-300 font-light max-w-sm">
                        Explore alguns dos trabalhos que ganharam forma através das nossas lentes.
                    </p>
                </div>

                {/* Horizontal scroll on mobile, grid on desktop */}
                <div
                    className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gunmetal-900 cursor-pointer flex-none w-[85vw] md:w-auto snap-center"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gunmetal-950 via-gunmetal-900/40 to-transparent opacity-90 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-tomato-400 text-sm font-medium tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h4 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

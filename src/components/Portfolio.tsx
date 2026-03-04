const projects = [
    {
        category: 'Documentário Institucional',
        title: 'JOVENS PELO CLIMA 2025',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    },
    {
        category: 'Produção de Conteúdo',
        title: 'PREFEITURA DE SOBRAL',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800'
    },
    {
        category: 'Produção de Conteúdo',
        title: 'NUTRICIONISTA, AYMI LINHARES',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'
    },
    {
        category: 'Eventos',
        title: 'SEROOCLUB',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
    },
    {
        category: 'Documentário Institucional',
        title: 'ABERTURA CÂMARA DE VEREADORES DE COREAÚ 2026',
        image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=800'
    },
    {
        category: 'Eventos',
        title: 'VIRADA DE ANO CAFÉ JERI',
        image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=800'
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

                {/* Custom horizontal scroll / grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gunmetal-900 cursor-pointer"
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

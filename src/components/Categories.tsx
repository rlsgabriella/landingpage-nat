import { Camera, Video, Lightbulb } from 'lucide-react';

const categories = [
    {
        title: 'Fotografia',
        description: 'Cobertura de eventos corporativos, retratos profissionais e editoriais.',
        icon: Camera,
        color: 'bg-fern-500 text-fern-50',
        borderColor: 'border-fern-100'
    },
    {
        title: 'Vídeo',
        description: 'Filmes institucionais, documentários e conteúdo dinâmico para redes sociais.',
        icon: Video,
        color: 'bg-tomato-500 text-tomato-50',
        borderColor: 'border-tomato-100'
    },
    {
        title: 'Consultoria',
        description: 'Direção criativa para marcas e profissionais que buscam orientação.',
        icon: Lightbulb,
        color: 'bg-gunmetal-800 text-gunmetal-50',
        borderColor: 'border-gunmetal-200'
    }
];

export default function Categories() {
    return (
        <section className="py-24 bg-soft-linen-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-tomato-600 tracking-wider uppercase mb-3">O que eu faço</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gunmetal-900">Categorias de Atuação</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-platinum-100 hover:${cat.borderColor} hover:-translate-y-2 relative overflow-hidden`}
                        >
                            {/* Subtle hover background highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-platinum-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${cat.color} group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                                    <cat.icon size={30} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-gunmetal-900 mb-4">{cat.title}</h3>
                                <p className="text-gunmetal-600 leading-relaxed font-light text-lg">
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

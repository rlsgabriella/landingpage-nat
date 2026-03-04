import { Star } from 'lucide-react';

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
    return (
        <section className="py-24 bg-soft-linen-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-tomato-600 tracking-wider uppercase mb-3">Avaliações reais no Google</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gunmetal-900">A voz de quem confia</h3>
                </div>

                {/* Auto-scrolling carousel setup for reviews - simplified grid for now */}
                <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
                    {testimonials.map((test, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-platinum-100 flex-1 min-w-[300px] max-w-md relative hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#f06542" className="text-tomato-400" />
                                ))}
                            </div>
                            <p className="text-gunmetal-700 italic font-light mb-8 leading-relaxed">
                                "{test.quote}"
                            </p>
                            <div className="mt-auto border-t border-platinum-100 pt-6">
                                <p className="font-bold text-gunmetal-900">{test.name}</p>
                                <p className="text-sm text-gunmetal-500">{test.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

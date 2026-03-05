import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Offer() {
    return (
        <section className="py-24 bg-gunmetal-950 relative overflow-hidden" id="offer">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gunmetal-900 rounded-l-full opacity-50 -translate-y-1/4 translate-x-1/4 blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Vamos criar algo <br />
                    <span className="text-tomato-500">à sua medida?</span>
                </h2>

                <p className="mb-12 text-sm font-semibold tracking-[0.2em] text-gunmetal-400 uppercase">
                    Aguardo você para darmos o próximo passo.
                </p>

                <a
                    href="https://wa.me/5588999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-fern-500 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-fern-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-fern-500/30 group mb-12"
                >
                    <MessageCircle size={24} />
                    Iniciar conversa no WhatsApp
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform ml-2 opacity-80" />
                </a>

                <div className="bg-gunmetal-900/80 backdrop-blur-sm border border-gunmetal-700 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl relative">
                    <div className="absolute -top-4 -left-4 text-6xl text-tomato-500/20">"</div>
                    <p className="text-lg text-platinum-100 italic leading-relaxed font-light relative z-10">
                        Não acredito em fórmulas prontas. Meu objetivo é entender o que a sua marca precisa hoje para desenvolver um material único. Seja para um café presencial ou uma chamada rápida, estou à disposição.
                    </p>
                    <div className="absolute -bottom-8 -right-4 text-6xl text-tomato-500/20">"</div>
                </div>

            </div>
        </section>
    );
}

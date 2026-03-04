export default function ValueProp() {
    return (
        <section className="py-24 bg-soft-linen-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-platinum-200/30 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-fern-200/20 rounded-full blur-3xl opacity-50"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="mb-6 flex justify-center">
                    <div className="w-12 h-1 bg-tomato-500 rounded-full"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-gunmetal-900 leading-tight mb-8 tracking-tight">
                    "Crio materiais institucionais, documentais e pessoais que vão te ajudar a olhar para o seu projeto sob outro ponto de vista."
                </h2>
                <p className="text-lg md:text-xl text-gunmetal-600 font-light max-w-2xl mx-auto border-t border-platinum-200 pt-8 inline-block">
                    Baseado em <span className="font-semibold text-gunmetal-900 border-b-2 border-tomato-200">Sobral e Fortaleza</span>, atuo para entregarmos uma imagem à altura do seu profissionalismo.
                </p>
            </div>
        </section>
    );
}

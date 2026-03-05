# Natalier Júnior | Landing Page

Uma landing page moderna e responsiva desenvolvida para apresentar o portfólio de serviços do profissional do audiovisual Natalier Júnior.

## 🚀 Tecnologias Utilizadas

Este projeto foi criado com as tecnologias mais modernas do ecossistema front-end:

*   **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção da interface de usuário.
*   **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado do JavaScript para maior segurança no código.
*   **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida.
*   **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
*   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones bonitos e consistentes em SVG.

## 🎨 Design e UI/UX

A interface foi projetada com fortes conceitos de UI:
*   **Aesthetics**: Glass-morphism elegante e contrastes de tons pastéis customizados.
*   **Tipografia**: Fonte moderna *Inter* definida como a principal.
*   **Responsividade**: Totalmente funcional em dispositivos móveis, tablets e monitores widescreen.
*   **UX**: Scroll suave entre as seções e micro-interações ao colocar o mouse sobre os cards (hover states).
*   **Carrosel Interativo**: Seção de depoimentos com carrosel fluido e botões de navegação personalizados para desktop.

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

### Pré-requisitos
*   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)

### Instalação

1.  Clone este repositório:
    ```bash
    git clone https://github.com/rlsgabriella/landingpage-nat.git
    ```
2.  Acesse o diretório do projeto:
    ```bash
    cd landingpage-nat
    ```
3.  Instale todas as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5.  Acesse o projeto pelo navegador na porta indicada (geralmente `http://localhost:5173/`).

## 📁 Estrutura de Arquivos

```
src/
├── components/          # Componentes React de cada seção da página
│   ├── Hero.tsx         # Primeira dobra com vídeo de fundo
│   ├── ValueProp.tsx    # Proposta de valor
│   ├── Categories.tsx   # Categorias de serviço (Fotografia, Vídeo, etc)
│   ├── Portfolio.tsx    # Grid de projetos e documentários 
│   ├── Testimonials.tsx # Carrosel scrollável de avaliações 
│   ├── About.tsx        # Seção Sobre com biografia
│   └── Offer.tsx        # Call-to-action final (Contato WhatsApp)
├── App.tsx              # Componente principal que une a página
├── index.css            # Configurações do Tailwind CSS v4 e cores customizadas
└── main.tsx             # Ponto de entrada do React
```

## 📝 Customização Futura

*   **Imagens/Vídeos**: O vídeo real do `Hero.tsx` pode ser inserido colocando o arquivo `.mp4` na pasta `/public` e apontando a tag `<video src="/meu-video.mp4" />`. O mesmo serve para as fotos do portfólio.
*   **Textos**: Todo o conteúdo é facilmente editável diretamente dentro dos arquivos `tsx` na pasta `components`.
*   **Cores**: A paleta base (`soft-linen`, `platinum`, `gunmetal`, `tomato`, `fern`) está configurada no topo do arquivo `src/index.css` através da nova sintaxe do Tailwind v4 (`@theme`).

---
Desenvolvido com 🤍 para o portfólio visual do Natalier Júnior.

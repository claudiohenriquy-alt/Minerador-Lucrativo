
import React from 'react';

const Step: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative pl-12 pb-8 border-l-2 border-slate-700">
     <div className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold text-lg border-4 border-slate-950">
      {number}
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Cole o link do produto", description: "Pegue o link de qualquer produto que você está pensando em vender." },
    { title: "Análise Instantânea", description: "O sistema analisa preço, taxas, concorrência e demanda em segundos." },
    { title: "Veja se dá Lucro", description: "Você vê na tela, de forma clara e instantânea, qual será seu lucro líquido." },
    { title: "Receba Fornecedores", description: "Sugerimos os melhores e mais confiáveis lugares para você comprar o produto." },
    { title: "Venda e Lucre HOJE", description: "Com a certeza do lucro, é só escolher o produto certo e começar a vender." },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Comece a Lucrar em 5 Passos Simples</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12">
            Deixamos tudo tão fácil que qualquer pessoa, mesmo sem experiência, pode começar a ganhar dinheiro agora.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <Step key={index} number={index + 1} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

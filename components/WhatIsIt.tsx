
import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-xl font-bold text-green-400 mb-2">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);

const WhatIsIt: React.FC = () => {
  const features = [
    { title: "Analisa Qualquer Produto", description: "Descubra a viabilidade de qualquer item antes de investir um centavo." },
    { title: "Calcula o Lucro Líquido", description: "Veja exatamente quanto você vai ganhar, já descontando taxas e custos." },
    { title: "Mapeia Concorrência e Demanda", description: "Saiba se as pessoas estão buscando pelo produto e quem são seus concorrentes." },
    { title: "Define o Preço de Venda Ideal", description: "Nossa IA sugere o preço perfeito para maximizar seu lucro e suas vendas." },
    { title: "Sugere Fornecedores Confiáveis", description: "Receba uma lista de onde comprar seu produto com segurança e bom preço." },
    { title: "Tudo em 1 Único Clique", description: "Cole o link e tenha uma análise completa em segundos. Simples assim." },
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">O Fim do "Achismo". Apenas <span className="text-purple-400">Dados</span> e <span className="text-green-400">Lucro</span>.</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12">
            O Minerador de Produtos Lucrativos é seu atalho para o sucesso. Uma ferramenta poderosa que transforma incerteza em clareza, prejuízo em lucro e perda de tempo em dinheiro no bolso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsIt;

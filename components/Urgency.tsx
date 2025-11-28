
import React from 'react';

const Urgency: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">As melhores oportunidades não esperam.</h2>
          <ul className="text-slate-300 text-lg md:text-xl space-y-2 mb-8 list-inside">
            <li>✓ Quem começa antes, <span className="font-bold text-white">lucra primeiro</span>.</li>
            <li>✓ Cada dia vendendo o produto errado é <span className="font-bold text-white">dinheiro perdido</span>.</li>
            <li>✓ As melhores margens <span className="font-bold text-white">não ficam disponíveis</span> por muito tempo.</li>
          </ul>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Sua concorrência pode já estar usando dados para sair na sua frente. É hora de virar o jogo.
          </p>
          <a
            href="#pricing"
            className="bg-green-500 text-slate-900 font-bold text-xl py-5 px-12 rounded-lg shadow-lg shadow-green-500/30 glow-on-hover transform hover:scale-105 transition-transform inline-block"
          >
            Garantir Meu Acesso Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Urgency;


import React from 'react';
import { CheckIcon } from './icons';

const Differentiator: React.FC = () => {
  const points = [
    { title: "Não é mais um curso", description: "É uma ferramenta prática para usar AGORA e ter resultados imediatos." },
    { title: "Não é promessa vazia", description: "É matemática pura. Mostramos o cálculo real do seu lucro, sem enrolação." },
    { title: "Clareza e Segurança Imediata", description: "Em segundos, você sabe se um produto vale a pena ou se é uma cilada." },
    { title: "Dados, Não Opiniões", description: "Decida com base em informações reais de mercado, não em 'achismos' de gurus." },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Por que isso é diferente de <span className="text-purple-400">TUDO</span> que você já tentou?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Você provavelmente já gastou dinheiro com cursos que ensinam teorias complexas ou comprou produtos que encalharam no estoque. Nós acabamos com isso. Nossa proposta é simples: te dar uma resposta clara e direta de 'sim' ou 'não' sobre a lucratividade de um produto.
            </p>
          </div>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-500/10 p-2 rounded-full mr-4">
                  <CheckIcon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  <p className="text-slate-400">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;

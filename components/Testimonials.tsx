
import React from 'react';
import { StarIcon } from './icons';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ricardo Mendes",
      role: "Vendedor Mercado Livre",
      content: "Eu estava perdendo dinheiro em cada venda por causa das taxas que eu calculava errado. Essa calculadora salvou meu negócio.",
      stars: 5
    },
    {
      name: "Fernanda Costa",
      role: "Iniciante na Shopee",
      content: "Simples e direto. Coloquei os dados e vi que meu fornecedor estava caro demais. Troquei e agora lucro 30% a mais.",
      stars: 5
    },
    {
      name: "Lucas Pereira",
      role: "Dropshipper",
      content: "A melhor ferramenta para validar produtos rápido. Não perco mais tempo testando coisa que não dá lucro.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Quem usa, recomenda</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{review.content}"</p>
              <div>
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

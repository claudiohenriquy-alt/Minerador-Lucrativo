
import React from 'react';
import { XIcon, CheckIcon } from './icons';

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
             <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Chega de perder dinheiro com <span className="text-red-400">produtos ruins</span>
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              A maioria dos iniciantes falha porque escolhe produtos com margem baixa demais. Não cometa esse erro.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-300">
                <XIcon className="w-6 h-6 text-red-500 mr-3" />
                Evite prejuízo e estoque parado
              </li>
              <li className="flex items-center text-slate-300">
                <XIcon className="w-6 h-6 text-red-500 mr-3" />
                Pare de trabalhar só para pagar taxas
              </li>
              <li className="flex items-center text-slate-300">
                <XIcon className="w-6 h-6 text-red-500 mr-3" />
                Não aposte sua sorte no escuro
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Com o nosso sistema você:</h3>
            <ul className="space-y-4">
               <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                <span className="text-white">Descobre produtos com margem de lucro real</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                <span className="text-white">Toma decisões com segurança total</span>
              </li>
               <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                <span className="text-white">Ganha dinheiro rápido escalando os produtos certos</span>
              </li>
               <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                <span className="text-white">Faz tudo em 1 clique, sem planilhas chatas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

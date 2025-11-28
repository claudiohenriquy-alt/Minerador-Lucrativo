
import React from 'react';
import { StarIcon } from './icons';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center text-slate-400">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-bold text-white">
              +7.500
            </p>
            <p>Análises feitas na última semana</p>
          </div>
          <div className="w-px h-12 bg-slate-700 hidden md:block"></div>
          <div className="flex flex-col items-center">
             <div className="flex items-center text-yellow-400 mb-1">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
            </div>
            <p className="text-slate-400">Lucros de <span className="font-bold text-white">R$300 a R$2.000</span> no primeiro mês</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

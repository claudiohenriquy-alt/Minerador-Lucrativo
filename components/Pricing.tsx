
import React, { useState } from 'react';
import { CheckIcon } from './icons';
import { PlanType } from '../App';

interface PricingProps {
  currentPlan: PlanType;
  onActivateDemo: () => void;
}

const Pricing: React.FC<PricingProps> = ({ currentPlan, onActivateDemo }) => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (plan: 'pro' | 'expert') => {
    setLoading(plan);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Failed to create checkout session:', data.error);
        alert('Erro ao iniciar checkout. Verifique o console para mais detalhes.');
        setLoading(null);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro de conexão. Tente novamente.');
      setLoading(null);
    }
  };

  return (
    <section className="py-20 bg-slate-900/20" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Escolha o plano ideal</h2>
          <p className="text-lg text-slate-300">
            Pare de perder dinheiro e comece a escalar seu negócio hoje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className={`bg-slate-900/50 border ${currentPlan === 'free' ? 'border-green-500/50' : 'border-slate-800'} rounded-xl p-8 flex flex-col transition-all`}>
            <h3 className="text-xl font-bold text-slate-300">Iniciante</h3>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-white">Grátis</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-300">
                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                3 análises por dia
              </li>
              <li className="flex items-center text-slate-300">
                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                Cálculo de margem básico
              </li>
            </ul>
            <a href="#calculator" className="w-full block text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-lg transition-colors">
              {currentPlan === 'free' ? 'Plano Atual' : 'Voltar para Grátis'}
            </a>
          </div>

          {/* Pro Tier */}
          <div className="bg-slate-900 border border-green-500 rounded-xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-green-900/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              RECOMENDADO
            </div>
            <h3 className="text-xl font-bold text-green-400">Pro</h3>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-white">R$ 29</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-white">
                <CheckIcon className="w-5 h-5 text-green-400 mr-2" />
                Análises <span className="font-bold ml-1">ILIMITADAS</span>
              </li>
              <li className="flex items-center text-white">
                <CheckIcon className="w-5 h-5 text-green-400 mr-2" />
                Histórico de cálculos
              </li>
              <li className="flex items-center text-white">
                <CheckIcon className="w-5 h-5 text-green-400 mr-2" />
                Suporte prioritário
              </li>
            </ul>
            <button 
              onClick={() => handleSubscribe('pro')}
              disabled={loading === 'pro' || currentPlan === 'pro'}
              className="w-full block text-center bg-green-500 hover:bg-green-400 text-slate-900 font-bold py-3 rounded-lg transition-colors glow-on-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === 'pro' ? 'Processando...' : currentPlan === 'pro' ? 'Plano Ativo' : 'Assinar Pro'}
            </button>
          </div>

          {/* Expert Tier */}
          <div className="bg-slate-900/50 border border-purple-500/50 rounded-xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-purple-400">Expert</h3>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-white">R$ 97</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-300">
                <CheckIcon className="w-5 h-5 text-purple-400 mr-2" />
                Tudo do plano Pro
              </li>
              <li className="flex items-center text-slate-300">
                <CheckIcon className="w-5 h-5 text-purple-400 mr-2" />
                Lista de Fornecedores Ocultos
              </li>
              <li className="flex items-center text-slate-300">
                <CheckIcon className="w-5 h-5 text-purple-400 mr-2" />
                Mentoria em grupo mensal
              </li>
            </ul>
            <button 
              onClick={() => handleSubscribe('expert')}
              disabled={loading === 'expert' || currentPlan === 'expert'}
              className="w-full block text-center bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
               {loading === 'expert' ? 'Processando...' : currentPlan === 'expert' ? 'Plano Ativo' : 'Assinar Expert'}
            </button>
          </div>
        </div>

        {/* Fallback Demo Mode */}
        <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-2">Quer testar as funcionalidades PRO sem gastar?</p>
            <button 
                onClick={onActivateDemo}
                className="text-slate-400 underline hover:text-white text-sm transition-colors"
            >
                Ativar Modo Demo (14 dias grátis - Simulação)
            </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

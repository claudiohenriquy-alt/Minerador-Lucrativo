
import React, { useState } from 'react';
import { PlanType } from '../App';

interface CalculatorProps {
  plan: PlanType;
  usageCount: number;
  incrementUsage: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ plan, usageCount, incrementUsage }) => {
  const [values, setValues] = useState({
    price: '',
    cost: '',
    shipping: '',
    feePercent: '',
    feeFixed: '',
    tax: ''
  });

  const [result, setResult] = useState<{
    revenue: number;
    marketplaceFee: number;
    govTax: number;
    profit: number;
    margin: number;
  } | null>(null);

  // Free limit: 3 calculations
  const isLimitReached = plan === 'free' && usageCount >= 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const calculate = () => {
    if (isLimitReached) return;

    const price = parseFloat(values.price.replace(',', '.')) || 0;
    const cost = parseFloat(values.cost.replace(',', '.')) || 0;
    const shipping = parseFloat(values.shipping.replace(',', '.')) || 0;
    const feePercent = parseFloat(values.feePercent.replace(',', '.')) || 0;
    const feeFixed = parseFloat(values.feeFixed.replace(',', '.')) || 0;
    const tax = parseFloat(values.tax.replace(',', '.')) || 0;

    const marketplaceFee = (price * (feePercent / 100)) + feeFixed;
    const govTax = price * (tax / 100);
    const totalCosts = cost + shipping + marketplaceFee + govTax;
    const profit = price - totalCosts;
    const margin = price > 0 ? (profit / price) * 100 : 0;

    setResult({
      revenue: price,
      marketplaceFee,
      govTax,
      profit,
      margin
    });

    incrementUsage();
  };

  const getVerdict = (margin: number) => {
    if (margin >= 30) return { text: "Produto Recomendado", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/50" };
    if (margin >= 15) return { text: "Atenção: Margem Média", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/50" };
    return { text: "Não Vale a Pena", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/50" };
  };

  return (
    <section className="py-20 relative" id="calculator">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Calculadora de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Lucro Real</span></h2>
          <p className="text-lg text-slate-300">
            {plan === 'free' 
              ? `Você usou ${usageCount}/3 análises gratuitas hoje.` 
              : "Modo PRO ativo: Análises ilimitadas."}
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Limit Reached Overlay */}
          {isLimitReached && (
            <div className="absolute inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Limite Diário Atingido</h3>
              <p className="text-slate-400 mb-8 max-w-md">
                Você usou suas 3 análises gratuitas de hoje. Para continuar descobrindo produtos milionários, desbloqueie o plano PRO.
              </p>
              <a href="#pricing" className="bg-green-500 hover:bg-green-400 text-slate-900 font-bold text-lg py-3 px-8 rounded-lg shadow-lg shadow-green-500/20 transform hover:scale-105 transition-all">
                Liberar Acesso Ilimitado
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 opacity-100 transition-opacity duration-300">
             <div className="space-y-4">
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2 tracking-wider">Preço de Venda (R$)</label>
                <div className="relative">
                   <span className="absolute left-3 top-3 text-slate-500">R$</span>
                   <input
                    type="number"
                    name="price"
                    placeholder="0.00"
                    disabled={isLimitReached}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-green-500 focus:outline-none transition-colors disabled:opacity-50"
                    value={values.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2 tracking-wider">Custo do Produto (R$)</label>
                <div className="relative">
                   <span className="absolute left-3 top-3 text-slate-500">R$</span>
                   <input
                    type="number"
                    name="cost"
                    placeholder="0.00"
                    disabled={isLimitReached}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-green-500 focus:outline-none transition-colors disabled:opacity-50"
                    value={values.cost}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2 tracking-wider">Frete Estimado (R$)</label>
                <div className="relative">
                   <span className="absolute left-3 top-3 text-slate-500">R$</span>
                   <input
                    type="number"
                    name="shipping"
                    placeholder="0.00"
                    disabled={isLimitReached}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-green-500 focus:outline-none transition-colors disabled:opacity-50"
                    value={values.shipping}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2 tracking-wider">Taxa Marketplace (%)</label>
                <input
                  type="number"
                  name="feePercent"
                  placeholder="Ex: 18"
                  disabled={isLimitReached}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50"
                  value={values.feePercent}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2 tracking-wider">Taxa Fixa Marketplace (R$)</label>
                <div className="relative">
                   <span className="absolute left-3 top-3 text-slate-500">R$</span>
                   <input
                    type="number"
                    name="feeFixed"
                    placeholder="Ex: 3.00"
                    disabled={isLimitReached}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50"
                    value={values.feeFixed}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2 tracking-wider">Imposto (%)</label>
                <input
                  type="number"
                  name="tax"
                  placeholder="Ex: 4"
                  disabled={isLimitReached}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50"
                  value={values.tax}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            disabled={isLimitReached}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-slate-900 font-extrabold text-xl py-4 rounded-lg shadow-lg shadow-green-500/20 transform hover:scale-[1.02] transition-all mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLimitReached ? "Limite Grátis Atingido" : "Analisar Lucratividade"}
          </button>

          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className={`p-6 rounded-xl border ${getVerdict(result.margin).border} ${getVerdict(result.margin).bg} mb-6`}>
                <h3 className={`text-2xl md:text-3xl font-bold text-center mb-2 ${getVerdict(result.margin).color}`}>
                  {getVerdict(result.margin).text}
                </h3>
                <p className="text-center text-slate-300">
                  Margem Líquida: <span className="font-bold text-white">{result.margin.toFixed(2)}%</span>
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Receita</p>
                  <p className="text-lg font-bold text-white">R$ {result.revenue.toFixed(2)}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Taxas Market.</p>
                  <p className="text-lg font-bold text-red-400">- R$ {result.marketplaceFee.toFixed(2)}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Impostos</p>
                  <p className="text-lg font-bold text-red-400">- R$ {result.govTax.toFixed(2)}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-green-500/30 bg-green-900/10">
                  <p className="text-[10px] text-green-500 uppercase tracking-wider mb-1">Lucro Líquido</p>
                  <p className="text-lg font-bold text-green-400">R$ {result.profit.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;

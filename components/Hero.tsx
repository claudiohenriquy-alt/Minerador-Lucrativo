
import React from 'react';

const Hero: React.FC = () => {
  
  const scrollToCalculator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const calculatorSection = document.getElementById('calculator');
    
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
      
      // Funcionalidade extra: Focar no primeiro campo para o usuário já digitar
      setTimeout(() => {
        const firstInput = calculatorSection.querySelector('input[name="price"]') as HTMLInputElement;
        if (firstInput) {
          firstInput.focus();
          firstInput.select(); // Seleciona o campo visualmente
        }
      }, 800); // Tempo para a rolagem terminar
    }
  };

  return (
    <section className="pt-32 pb-16 text-center relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/50 text-purple-300 text-sm font-semibold">
          🚀 Nova ferramenta liberada
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-5xl mx-auto">
          Descubra produtos que dão <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">lucro REAL</span> antes de gastar dinheiro — e comece a lucrar ainda hoje.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Pare de “chutar” e comece a acertar. Nossa calculadora automática revela se um produto vai colocar dinheiro no seu bolso ou prejuízo na sua conta.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#calculator" 
            onClick={scrollToCalculator}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-slate-900 font-bold text-lg py-4 px-10 rounded-lg shadow-xl shadow-green-500/20 transform hover:scale-105 transition-all cursor-pointer"
          >
            Analisar Meu Produto Agora
          </a>
          <a 
            href="#calculator" 
            onClick={scrollToCalculator}
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold py-4 px-10 rounded-lg transition-colors cursor-pointer"
          >
            Testar Grátis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

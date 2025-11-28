
import React from 'react';

interface HeaderProps {
  currentPlan: 'free' | 'pro' | 'expert';
}

const Header: React.FC<HeaderProps> = ({ currentPlan }) => {
  return (
    <header className="py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <span className="text-white">Minerador</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Lucrativo</span>
        </h1>
        
        <div className="flex items-center gap-4">
          {currentPlan !== 'free' && (
            <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
              ● {currentPlan.toUpperCase()} ATIVO
            </span>
          )}
          
          <a href="#pricing" className={`
            font-semibold py-2 px-4 rounded-lg transition-all text-sm md:text-base
            ${currentPlan === 'free' 
              ? 'bg-green-500 hover:bg-green-400 text-slate-900 shadow-lg shadow-green-500/20' 
              : 'bg-slate-800 hover:bg-slate-700 text-white'}
          `}>
            {currentPlan === 'free' ? 'Assinar PRO' : 'Gerenciar Plano'}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

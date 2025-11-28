
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} Minerador de Produtos Lucrativos. Todos os direitos reservados.
        </p>
        <p className="text-slate-600 text-xs max-w-2xl mx-auto">
          Aviso legal: Os resultados dependem da execução e estratégia de cada usuário. Esta ferramenta entrega estimativas matemáticas baseadas nos dados inseridos. Não garantimos lucro sem esforço.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

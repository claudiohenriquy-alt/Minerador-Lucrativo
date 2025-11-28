
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export type PlanType = 'free' | 'pro' | 'expert';

const App: React.FC = () => {
  const [plan, setPlan] = useState<PlanType>('free');
  const [usageCount, setUsageCount] = useState(0);
  
  // Load state from local storage on mount
  useEffect(() => {
    // 1. Check for URL params (returning from Stripe)
    const query = new URLSearchParams(window.location.search);
    if (query.get('success') === 'true' && query.get('session_id')) {
      // Optimistic update: In a real app, you would verify session_id with backend
      setPlan('pro');
      localStorage.setItem('user_plan', 'pro');
      // Clean URL
      window.history.replaceState({}, document.title, "/");
      
      // Scroll to functionality immediately on success
      setTimeout(() => {
        const calculatorSection = document.getElementById('calculator');
        if (calculatorSection) {
          calculatorSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);

      alert("Pagamento confirmado! Seu plano PRO está ativo.");
    } else {
      // Load plan from storage
      const storedPlan = localStorage.getItem('user_plan') as PlanType;
      if (storedPlan) setPlan(storedPlan);
    }

    // 2. Load Usage Logic
    const today = new Date().toISOString().split('T')[0];
    const storedUsage = JSON.parse(localStorage.getItem('daily_usage') || '{}');
    
    if (storedUsage.date === today) {
      setUsageCount(storedUsage.count || 0);
    } else {
      // New day, reset usage
      setUsageCount(0);
      localStorage.setItem('daily_usage', JSON.stringify({ date: today, count: 0 }));
    }
  }, []);

  const incrementUsage = () => {
    const newCount = usageCount + 1;
    setUsageCount(newCount);
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('daily_usage', JSON.stringify({ date: today, count: newCount }));
  };

  const handleDemoActivation = () => {
    setPlan('pro');
    localStorage.setItem('user_plan', 'pro');
    
    // Scroll to calculator FIRST so the user sees where they are going
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Small timeout to allow scroll to start before alert (UX improvement)
    setTimeout(() => {
        alert("Modo DEMO ativado! Você tem acesso PRO (simulado) por 14 dias.");
    }, 500);
  };

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden gradient-bg min-h-screen font-sans selection:bg-green-500 selection:text-slate-900">
      <Header currentPlan={plan} />
      <main>
        <Hero />
        <Benefits />
        <Calculator 
          plan={plan} 
          usageCount={usageCount} 
          incrementUsage={incrementUsage} 
        />
        <Testimonials />
        <Pricing 
          currentPlan={plan} 
          onActivateDemo={handleDemoActivation}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;

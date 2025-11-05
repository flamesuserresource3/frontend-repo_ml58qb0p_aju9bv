import React from 'react';
import Hero from './components/Hero';
import Summary from './components/Summary';
import WorkShowcase from './components/WorkShowcase';
import ContactFooter from './components/ContactFooter';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Hero />
      <Summary />
      <WorkShowcase />
      <ContactFooter />
    </div>
  );
};

export default App;

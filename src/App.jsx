import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Connect from './components/Connect';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <About />
        <Connect />
        <Skills />
      </div>
    </div>
  );
}

export default App;
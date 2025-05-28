import React from 'react';

function Header() {
  return (
    <header className="text-center mb-12">
      <img 
        src="https://api.daily.dev/devcards/v2/UpJn4LLbGICbG3ioCYhJa.png?type=wide&r=96j"
        alt="Cindano Jonathan's Dev Card"
        className="mx-auto mb-8 rounded-lg shadow-lg max-w-2xl w-full"
      />
      <h1 className="text-4xl font-bold mb-4">Hello World ! 👋, I'm Cindano Jonathan</h1>
      <h2 className="text-xl text-gray-600">
        Java Spring backend developer, Tech enthusiast, I play soccer ⚽️ on my free time.
      </h2>
    </header>
  );
}

export default Header
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-4 md:flex-row md:space-x-4">
      <Greeting name="John" />
      <Counter />
    </div>
  );
};

export default App;

import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="bg-purple-600 text-white p-4 rounded-lg text-center text-xl">
      Hello, {name}!
    </div>
  );
};

export default Greeting;

import { createContext, useState } from 'react';
import './App.css';
import Parent from './Pages/Parent';

const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount }

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="flex justify-center">
        <Parent></Parent>
      </div>
    </COUNTER_CONTEXT.Provider>

  );
}

export default App;

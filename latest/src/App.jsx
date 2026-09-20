import { useState } from 'react'
import AdviceCard from "./components/AdviceCard"

import './App.css'

function App() {
  const [adviceIndex, setAdviceIndex] = useState(0);
  const currentAdvice = SAMPLE_ADVICE[adviceIndex];

  const handleGenerateAdvice =

  return (
    <main className='app-shell`>
    <AdviceCard
    adviceId={currentAdvice.id}
    adviceText={currentAdvice.text}
    onGenerateAdvice={handleGenerateAdvice}
    />
    </main>
  );
}

export default App;

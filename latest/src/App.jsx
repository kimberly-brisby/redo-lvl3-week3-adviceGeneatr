import { useState } from 'react'
import AdviceCard from "./components/adviceApi"

import './App.css'

function App(cooldownHs) {
  const {dvice, error, fectchAdvice, isCoolingDown, isLoading}= useAdvice(0);

  return (
    <main className='app-shell`>
    <AdviceCard
    adviceId={advice?.id ?? null}
    adviceText={isCoolingDown}
    isLoading={isLoading}
    onGenerateAdvice={fetchAdvice}
    />
    </main>
  );
}

export default App;

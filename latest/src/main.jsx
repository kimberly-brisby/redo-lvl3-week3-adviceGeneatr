import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; 

function App() {

  const [adviceId, setAdviceId] = useState('...');
  const [adviceText, setAdviceText] = useState('Loading advice...');

 
  const fetchAdvice = async () => {
    try {
      
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      
      setAdviceId(data.slip.id);
      setAdviceText(`"${data.slip.advice}"`);
    } catch (error) {
      console.error("Error fetching data:", error);
      setAdviceText("Failed to load advice. Please try again.");
    }
  };


  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <div className="container">
      <div className="card">
        <div className="advice">
          Advice #<span>{adviceId}</span>
        </div>
        
        <div className="advicetext">
          <p>{adviceText}</p>
        </div>

        <div>
          <img 
            className="divider desktop" 
            src="/images/pattern-divider-desktop.svg" 
            alt="divider-desktop" 
          />
        </div>

        {}
        <button className="btn" id="btn" onClick={fetchAdvice}>
          <img className="dice" src="/images/icon-dice.svg" alt="btn" />
        </button>
      </div>
    </div>
  );
}





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react';
import logo from './logo.svg';
import './App.css';
import imprime from './imprimer.png'
import param from './parametre.png'
import routeur from './routeur.png'

function App() {
  return (
    <div className="App">
    
      <header >
      
       <div className="App-header">
        <img src={imprime} className="App-logo" alt="logo" />
        <p className="App-txt">Imprimer</p>
        <img src={routeur} className="App-logo" alt="logo" />
        <img src={param} className="App-logo" alt="logo" />
        </div>
        
      </header>
     
    </div>
  );
}

export default App;

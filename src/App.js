import React from 'react';
import logo from './logo.svg';
import './App.css';
import imprime from './imprimer.png'
import param from './parametre.png'
import routeur from './routeur.png'
import move from './move.png'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mydood: "No Dood connected",

    };
  }
  render() {
  return (
    <div className="App">
    
      <header >
      <p className="App-txt-mydood">My Dood : {this.state.mydood}</p>
       <div className="App-header">
        <img src={imprime} className="App-logo"  />
        <p className="App-txt-imprim">Imprimer</p>
        <img src={move} className="App-logo"  />
        <p className="App-txt-move">Deplacer</p>
        <img src={param} className="App-logo"  />
        <p className="App-txt-param">Parametres</p>
        </div>
        
      </header>
     
    </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import json_data from './frases.json'

class Componente extends Component {
  constructor(props) {
    super(props);
    this.gerarFrase();
    this.state = {
      frase: this.todasFrases[0],
      classe: ''
    }
  }

  gerarNumeroInteiro(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  mudaFrase = event => {
    const fraseGenerator = this.todasFrases[this.gerarNumeroInteiro(0, (this.todasFrases.length - 1))];
    this.setState({
      frase: fraseGenerator,
      classe: 'animar'
    });

    setTimeout(() => {
      this.setState({
        classe: ''
      });
    }, 500)
  }

  gerarFrase = () => {
    const totalFrases = json_data;
    this.todasFrases = totalFrases.map(frases => frases.frase);

  }

  render() {
    return (
      <div className="App">
        <p className={this.state.classe}>{this.state.frase}</p>
        <button onClick={this.mudaFrase}>Gerar Frase</button>
      </div>
    );
  }
}

export default Componente;

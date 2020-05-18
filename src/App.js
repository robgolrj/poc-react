import React from 'react';
import './App.css';
import CampoNome from './components/CampoNome';
import Texto from './components/Texto';
import 'bootstrap/dist/css/bootstrap.min.css'

import ListaProjetos from './components/ListaProjetos';

// Crie como classe para manipular estados
class App extends React.Component {
  //Criando estado
  state = {
    nome: 'Robson',
    idade: 30,
    projeto: ''
  };

  constructor(props) {
    super(props);
    const l = document.createElement('botao-web-component');
  }

  handleChangeNome = (event) => {
    this.setState({nome: event.target.value})
  }
  handleChangeIdade = (event) => {
    this.setState({idade: event.target.value})
  }
  
  handleChangeProjeto = (event) => {
    this.setState({ projeto: event.target.value })
  }
    
  render() {
    return (
      <form className="container">
      <div className="form-group">
        <CampoNome 
          nome={this.state.nome} 
          meuBind={this.handleChangeNome}
        />
        <Texto nome={this.state.nome} />
        <hr />
        <CampoNome
          nome={this.state.idade} 
          meuBind={this.handleChangeIdade}
        />
        <Texto nome={this.state.idade} />
        
        <hr />
        
        <ListaProjetos onChange={this.handleChangeProjeto} />        
        <Texto nome={'Projeto selecionado: ' + this.state.projeto} />
        <l></l>
      </div>
      </form>
    );
  }
  
}

export default App;
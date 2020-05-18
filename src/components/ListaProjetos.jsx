import React, { Component } from 'react';

// Criando como classe, pois quero manipular estado dentro do componente.
class ListaProjetos extends React.Component{
    state = {
      projetos: []
    };
    async componentDidMount() {
      const response = await fetch('https://api.github.com/users/robgolrj/repos');
      const data = await response.json();
      this.setState({ projetos: data.map(e => e.name) });
    }
    render() {
      return (
        <select onChange={this.props.onChange}>
          <option>selecione</option>
          {this.state.projetos.map(projeto =>
            <option>{projeto}</option>
          )}
        </select>
      )
    }
  }

  export default ListaProjetos;
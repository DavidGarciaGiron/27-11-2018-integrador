import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        clientes: []
      }
  }

  componentWillMount() {
      fetch('https://integrador4tociclo-vicse.c9users.io/api/clientes/')
        .then((response) => {
          return response.json()
        })
        .then((prod) => {
          this.setState({
            clientes: prod
          })
        })
    }

  render() {
      return (
        <div>
          <h3>Pagina Principal</h3>
          <hr/>
          <br/>
          <br/>

          <table border="1">
          <thead>
            <tr>
              <th>id_cliente</th>
              <th>nombre</th>
              <th>correo</th>
              <th>dni</th>
              <th>password</th>
              <th>direccion</th>
              <th>latitud</th>
              <th>longitud</th>
            </tr>
          </thead>
          <tbody>
            {this.state.clientes.map(cliente => {
              return (
                <tr key={cliente.id_cliente}>
                  <td>{cliente.id_cliente}</td>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.correo}</td>
                  <td>{cliente.dni}</td>
                  <td>{cliente.password}</td>
                  <td>{cliente.direccion}</td>
                  <td>{cliente.latitud}</td>
                  <td>{cliente.longitud}</td>
                </tr>
              );
            })}
          </tbody>
          </table>

        </div>
      );
    }

}

export default App;

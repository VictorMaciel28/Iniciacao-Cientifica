import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Componentes/Chart.js'

class App extends Component {
constructor(){
  super();
  this.state = {
    chartData:{}
  }
}

componentWillMount(){
  this.getChartData();
}

getChartData(){
  //Ajax aqui
  this.setState({
    chartData:{
      labels: ['AP','RM','AB'],
      datasets:[
        {
          label:'Quantidade',
          data:[
            12,
            17,
            13
          ],
          backgroundColor:[
            'rgba(74, 143, 89, 0.9)',
            'rgba(148, 17, 0, 0.9)',
            'rgba(126, 108, 154, 0.9)'
          ]
        }
      ]
    }
  })
}



  render() {
    return (
      <div className="App">

          <h2>Situação dos Alunos 2010.1 </h2>
          <h3>Calculo Numérico</h3>
        <Chart chartData={this.state.chartData} legendPosition="top"/>
        </div>
    );
  }
}

export default App;

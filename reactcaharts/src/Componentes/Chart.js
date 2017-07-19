import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

static defaultProps = {
  displayTittle:true,
  displayLegend: true,
  legendPosition:'right'

}

  render(){
    return(
      <div className="char">
      <div className="char">
      <Bar
      data={this.state.chartData}
      options={{
        tittle:{
          display:this.props.displayTittle,
          text:'Situação 2010-1',
          fontSize:25
        },
        legend:{
          display:this.props.displayLegend,
          position:this.props.legendPosition
        },
        maintainAspectRatio: 0.2
      }}
      />
      </div>

      <Pie
      data={this.state.chartData}
      options={{
        tittle:{
          display:this.props.displayTittle,
          text:'Situação 2010-1',
          fontSize:25
        },
        legend:{
          display:this.props.displayLegend,
          position:this.props.legendPosition
        },
          maintainAspectRatio: true
      }}
      />
      <div className="char">
      <Line
      data={this.state.chartData}
      options={{
        tittle:{
          display:this.props.displayTittle,
          text:'Situação 2010-1',
          fontSize:25
        },
        legend:{
          display:this.props.displayLegend,
          position:this.props.legendPosition
        },
          maintainAspectRatio:true
      }}
      />
      </div>

      </div>


    )
  }

}

export default Chart;

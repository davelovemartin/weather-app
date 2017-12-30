import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react'
import Highcharts from 'highcharts'

class WeatherForecastChart extends Component {
  render () {
    return (
      <div className='chart'>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'chart'}
          options={this.props.options}
        />
      </div>
    )
  }
}

export default WeatherForecastChart

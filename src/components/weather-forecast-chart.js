import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react'
import Highcharts from 'highcharts'

const options = {
  chart: {
    type: 'column',
    width: null,
    style: {
      fontFamily: 'Helvetica'
    }
  },
  title: {
    text: 'Six Day Forecast',
    style: { 'color': '#212121', 'fontSize': '1.375rem' }
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun'
    ],
    crosshair: true
  },
  yAxis: {
    title: 'Values'
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.1,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Max Temp',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
  }, {
    name: 'Avg Temp',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5]
  }, {
    name: 'Min Temp',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3]
  }]
}

class WeatherForecastChart extends Component {
  render () {
    return (
      <div className='chart'>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'chart'}
          options={options}
        />
      </div>
    )
  }
}

export default WeatherForecastChart

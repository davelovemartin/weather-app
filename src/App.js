import React, { Component } from 'react'
import SearchBar from './components/search-bar'
import WeatherStatusWidget from './components/weather-status-widget'
import WeatherForecastChart from './components/weather-forecast-chart'

const data = {
  'consolidated_weather': [
    {
      'id': 6326400092995584,
      'weather_state_name': 'Light Cloud',
      'weather_state_abbr': 'lc',
      'wind_direction_compass': 'NW',
      'created': '2017-12-28T11:31:43.812690Z',
      'applicable_date': '2017-12-28',
      'min_temp': -9.540000000000001,
      'max_temp': -6.122,
      'the_temp': -8,
      'wind_speed': 9.808430611165194,
      'wind_direction': 318.83933840409867,
      'air_pressure': 1037.625,
      'humidity': 56,
      'visibility': 18.21363238686073,
      'predictability': 70
    }
  ],
  'time': '2017-12-28T08:33:45.435260-05:00',
  'sun_rise': '2017-12-28T07:19:21.544734-05:00',
  'sun_set': '2017-12-28T16:36:15.725593-05:00'
}

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

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header role='header'>
          <h1>Weather Dashboard</h1>
        </header>
        <SearchBar />
        <WeatherStatusWidget
          widgetTitle='Current Temp'
          widgetData={data.consolidated_weather[0].the_temp}
        />
        <WeatherStatusWidget
          widgetTitle='Current Weather'
          widgetData={data.consolidated_weather[0].weather_state_name}
        />
        <WeatherStatusWidget
          widgetTitle='Sundown'
          widgetData={data.sun_set}
        />
        <WeatherForecastChart options={options} />
      </div>
    )
  }
}

export default App

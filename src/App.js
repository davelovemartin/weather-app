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

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header role='header'>
          <h1>Weather Dashboard</h1>
        </header>
        <main role='main'>
          <SearchBar />
          <div>
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
          </div>
          <WeatherForecastChart />
        </main>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import moment from 'moment'
import twix from 'twix'
import SearchBar from './components/search-bar'
import WeatherStatusWidget from './components/weather-status-widget'
import WeatherForecastChart from './components/weather-forecast-chart'

class App extends Component {
  render () {
    const data = {
      "consolidated_weather": [
        {
          "id": 5577970500501504,
          "weather_state_name": "Showers",
          "weather_state_abbr": "s",
          "wind_direction_compass": "WSW",
          "created": "2017-12-30T11:31:04.887570Z",
          "applicable_date": "2017-12-30",
          "min_temp": 7.837999999999999,
          "max_temp": 12.6,
          "the_temp": 12.105,
          "wind_speed": 13.364041983642727,
          "wind_direction": 250.38278010408806,
          "air_pressure": 1000.2149999999999,
          "humidity": 79,
          "visibility": 9.169885369442456,
          "predictability": 73
        },
        {
          "id": 5059198714904576,
          "weather_state_name": "Showers",
          "weather_state_abbr": "s",
          "wind_direction_compass": "SW",
          "created": "2017-12-30T11:31:05.124010Z",
          "applicable_date": "2017-12-31",
          "min_temp": 6.162,
          "max_temp": 12.538,
          "the_temp": 10.77,
          "wind_speed": 12.872432912681143,
          "wind_direction": 229.39947272053513,
          "air_pressure": 998.38,
          "humidity": 78,
          "visibility": 13.849742503777936,
          "predictability": 73
        },
        {
          "id": 6684642778284032,
          "weather_state_name": "Light Rain",
          "weather_state_abbr": "lr",
          "wind_direction_compass": "W",
          "created": "2017-12-30T11:31:04.786210Z",
          "applicable_date": "2018-01-01",
          "min_temp": 4.678,
          "max_temp": 7.632,
          "the_temp": 6.695,
          "wind_speed": 6.934993385083909,
          "wind_direction": 277.7466910403695,
          "air_pressure": 993.005,
          "humidity": 83,
          "visibility": 8.167924321959756,
          "predictability": 75
        },
        {
          "id": 6121723963375616,
          "weather_state_name": "Light Rain",
          "weather_state_abbr": "lr",
          "wind_direction_compass": "SW",
          "created": "2017-12-30T11:31:04.164940Z",
          "applicable_date": "2018-01-02",
          "min_temp": 5.848,
          "max_temp": 9.324000000000002,
          "the_temp": 7.77,
          "wind_speed": 8.705349372569794,
          "wind_direction": 227.2162490678588,
          "air_pressure": 1011.63,
          "humidity": 84,
          "visibility": 10.764013163127336,
          "predictability": 75
        },
        {
          "id": 5493910340108288,
          "weather_state_name": "Light Rain",
          "weather_state_abbr": "lr",
          "wind_direction_compass": "W",
          "created": "2017-12-30T11:31:04.937170Z",
          "applicable_date": "2018-01-03",
          "min_temp": 5.988,
          "max_temp": 10.052,
          "the_temp": 10.16,
          "wind_speed": 15.529365620722183,
          "wind_direction": 267.200214640721,
          "air_pressure": 1006.5550000000001,
          "humidity": 72,
          "visibility": 14.526415732124393,
          "predictability": 75
        },
        {
          "id": 6105882110722048,
          "weather_state_name": "Showers",
          "weather_state_abbr": "s",
          "wind_direction_compass": "W",
          "created": "2017-12-30T11:31:07.683040Z",
          "applicable_date": "2018-01-04",
          "min_temp": 4.601999999999999,
          "max_temp": 8.326,
          "the_temp": 6.29,
          "wind_speed": 8.808264336276146,
          "wind_direction": 259.86265115116214,
          "air_pressure": 1010.97,
          "humidity": 75,
          "visibility": 9.997862483098704,
          "predictability": 73
        }
      ],
      "time": "2017-12-30T12:04:11.582100Z",
      "sun_rise": "2017-12-30T08:06:14.822593Z",
      "sun_set": "2017-12-30T16:00:08.125986Z",
      "timezone_name": "LMT",
      "parent": {
        "title": "England",
        "location_type": "Region / State / Province",
        "woeid": 24554868,
        "latt_long": "52.883560,-1.974060"
      },
      "sources": [
        {
          "title": "BBC",
          "slug": "bbc",
          "url": "http://www.bbc.co.uk/weather/",
          "crawl_rate": 180
        },
        {
          "title": "Forecast.io",
          "slug": "forecast-io",
          "url": "http://forecast.io/",
          "crawl_rate": 480
        },
        {
          "title": "HAMweather",
          "slug": "hamweather",
          "url": "http://www.hamweather.com/",
          "crawl_rate": 360
        },
        {
          "title": "Met Office",
          "slug": "met-office",
          "url": "http://www.metoffice.gov.uk/",
          "crawl_rate": 180
        },
        {
          "title": "OpenWeatherMap",
          "slug": "openweathermap",
          "url": "http://openweathermap.org/",
          "crawl_rate": 360
        },
        {
          "title": "Weather Underground",
          "slug": "wunderground",
          "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
          "crawl_rate": 720
        },
        {
          "title": "World Weather Online",
          "slug": "world-weather-online",
          "url": "http://www.worldweatheronline.com/",
          "crawl_rate": 360
        },
        {
          "title": "Yahoo",
          "slug": "yahoo",
          "url": "http://weather.yahoo.com/",
          "crawl_rate": 180
        }
      ],
      "title": "London",
      "location_type": "City",
      "woeid": 44418,
      "latt_long": "51.506321,-0.12714",
      "timezone": "Europe/London",
      "dataProvider": "https://www.metaweather.com"
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
          moment(data.consolidated_weather[0].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(data.consolidated_weather[1].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(data.consolidated_weather[2].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(data.consolidated_weather[3].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(data.consolidated_weather[4].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(data.consolidated_weather[5].applicable_date, 'YYYY-MM-DD').format('DD.MMM')
        ],
        crosshair: true
      },
      yAxis: {
        title: 'Values'
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
        name: 'Max temp',
        data: [
          data.consolidated_weather[0].max_temp,
          data.consolidated_weather[1].max_temp,
          data.consolidated_weather[2].max_temp,
          data.consolidated_weather[3].max_temp,
          data.consolidated_weather[4].max_temp,
          data.consolidated_weather[5].max_temp
        ]
      }, {
        name: 'Avg temp',
        data: [
          data.consolidated_weather[0].the_temp,
          data.consolidated_weather[1].the_temp,
          data.consolidated_weather[2].the_temp,
          data.consolidated_weather[3].the_temp,
          data.consolidated_weather[4].the_temp,
          data.consolidated_weather[5].the_temp
        ]
      }, {
        name: 'Min temp',
        data: [
          data.consolidated_weather[0].min_temp,
          data.consolidated_weather[1].min_temp,
          data.consolidated_weather[2].min_temp,
          data.consolidated_weather[3].min_temp,
          data.consolidated_weather[4].min_temp,
          data.consolidated_weather[5].min_temp
        ]
      }]
    }
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
          widgetData={moment(data.time) < moment(data.sun_set) ? moment(data.time).twix(data.sun_set).humanizeLength() : moment(data.time).twix(data.sun_set).humanizeLength() + ' ago'}
        />
        <WeatherForecastChart options={options} />
      </div>
    )
  }
}

export default App

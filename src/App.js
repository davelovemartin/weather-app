import React, { Component } from 'react'
import moment from 'moment'
import twix from 'twix'
import Skeleton from 'react-loading-skeleton'
import SearchBar from './components/search-bar'
import WeatherStatusWidget from './components/weather-status-widget'
import WeatherForecastChart from './components/weather-forecast-chart'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      location: 'Search',
      data: {
        consolidated_weather: [
          {
            weather_state_name: 'Showers',
            applicable_date: '2018-01-01',
            min_temp: 0,
            max_temp: 0,
            the_temp: 0
          },
          {
            applicable_date: '2018-01-02',
            min_temp: 0,
            max_temp: 0,
            the_temp: 0
          },
          {
            applicable_date: '2018-01-03',
            min_temp: 0,
            max_temp: 0,
            the_temp: 0
          },
          {
            applicable_date: '2018-01-04',
            min_temp: 0,
            max_temp: 0,
            the_temp: 0
          },
          {
            applicable_date: '2018-01-05',
            min_temp: 0,
            max_temp: 0,
            the_temp: 0
          },
          {
            applicable_date: '2018-01-06',
            min_temp: 0,
            max_temp: 0,
            the_temp: 0
          }
        ],
        time: '2018-01-01T00:00:00.000000Z',
        sun_set: '2018-01-01T00:00:00.000000Z'
      }
    }

    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
  }

  handleLocationChange (location) {
    this.setState({ location: location })
  }

  handleLocation () {
    this.checkLocation(this.state.location)
  }

  async checkLocation (location) {
    this.setState({ loading: true })
    try {
      // await response of fetch call
      let response = await fetch('http://interview.toumetisanalytics.com/location/' + location)
      // only proceed once promise is resolved
      const locationData = await response.json()
      // await response of fetch call
      response = await fetch('http://interview.toumetisanalytics.com/weather/' + locationData[0].woeid)
      // only proceed once promise is resolved
      const weatherData = await response.json()
      // set data to state
      this.setState({data: weatherData})
    } catch (err) {
      alert('Please enter a valid place name')
    }
    this.setState({ loading: false })
  }

  render () {
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
          moment(this.state.data.consolidated_weather[0].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(this.state.data.consolidated_weather[1].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(this.state.data.consolidated_weather[2].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(this.state.data.consolidated_weather[3].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(this.state.data.consolidated_weather[4].applicable_date, 'YYYY-MM-DD').format('DD.MMM'),
          moment(this.state.data.consolidated_weather[5].applicable_date, 'YYYY-MM-DD').format('DD.MMM')
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
          this.state.data.consolidated_weather[0].max_temp,
          this.state.data.consolidated_weather[1].max_temp,
          this.state.data.consolidated_weather[2].max_temp,
          this.state.data.consolidated_weather[3].max_temp,
          this.state.data.consolidated_weather[4].max_temp,
          this.state.data.consolidated_weather[5].max_temp
        ]
      }, {
        name: 'Avg temp',
        data: [
          this.state.data.consolidated_weather[0].the_temp,
          this.state.data.consolidated_weather[1].the_temp,
          this.state.data.consolidated_weather[2].the_temp,
          this.state.data.consolidated_weather[3].the_temp,
          this.state.data.consolidated_weather[4].the_temp,
          this.state.data.consolidated_weather[5].the_temp
        ]
      }, {
        name: 'Min temp',
        data: [
          this.state.data.consolidated_weather[0].min_temp,
          this.state.data.consolidated_weather[1].min_temp,
          this.state.data.consolidated_weather[2].min_temp,
          this.state.data.consolidated_weather[3].min_temp,
          this.state.data.consolidated_weather[4].min_temp,
          this.state.data.consolidated_weather[5].min_temp
        ]
      }]
    }
    const location = this.state.location
    return (
      <div className='App'>
        <header role='header'>
          <h1>Weather Dashboard</h1>
        </header>
        <SearchBar
          disabled={this.state.loading}
          onLocationChange={this.handleLocationChange}
          onSearchClick={this.handleLocation}
          value={location}
        />
        <WeatherStatusWidget
          widgetTitle='Current Temp'
          widgetData={this.state.loading ? <Skeleton /> : Math.round(this.state.data.consolidated_weather[0].the_temp) + '˚C'}
        />
        <WeatherStatusWidget
          widgetTitle='Current Weather'
          widgetData={this.state.loading ? <Skeleton /> : this.state.data.consolidated_weather[0].weather_state_name}
        />
        {
          this.state.loading
        ? <WeatherStatusWidget
          widgetTitle='Sundown'
          widgetData={<Skeleton />}
        />
        : <WeatherStatusWidget
          widgetTitle='Sundown'
          widgetData={moment(this.state.data.time) < moment(this.state.data.sun_set) ? moment(this.state.data.time).twix(this.state.data.sun_set).humanizeLength() : moment(this.state.data.time).twix(this.state.data.sun_set).humanizeLength() + ' ago'}
          />
        }
        <WeatherForecastChart options={options} />
      </div>
    )
  }
}

export default App

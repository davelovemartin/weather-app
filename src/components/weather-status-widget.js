import React, { Component } from 'react'

class WeatherStatusWidget extends Component {
  render () {
    return (
      <article>
        <h2>{this.props.widgetTitle}</h2>
        <object>
          <p>{this.props.widgetData}</p>
        </object>
      </article>
    )
  }
}

export default WeatherStatusWidget

import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => this.props.onLocationChange(e.target.value)
  handleClick (e) {
    e.preventDefault()
    this.props.onSearchClick()
  }

  render () {
    const location = this.props.location
    return (
      <div className='search'>
        <form role='search'>
          <input
            type='text'
            value={location}
            onChange={this.handleChange}
            name='search'
          />
          <button
            disabled={this.props.disabled}
            onClick={this.handleClick}
            type='submit'
          >Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchBar

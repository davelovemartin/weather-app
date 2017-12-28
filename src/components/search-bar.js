import React, { Component } from 'react'

class SearchBar extends Component {
  render () {
    return (
      <div>
        <form role='search'>
          <label for='search'>Search for Location:</label>
          <input
            type='text'
            value=''
            name='search'
            placeholder='Search'
          />
          <button aria-label='Do search'>Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchBar

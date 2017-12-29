import React, { Component } from 'react'

class SearchBar extends Component {
  render () {
    return (
      <div className='search'>
        <form role='search'>
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

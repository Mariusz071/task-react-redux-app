import React, { Component } from 'react'
import cn from 'classnames'
import debounce from 'lodash.debounce'

import './Searchbar.scss'

class Searchbar extends Component {
  inputChange = e => {
    const { value } = e.target
    const { getValue } = this.props
    getValue(value)
  }

  render() {
    const { display, getValue } = this.props
    return (
      <div
        className={cn('searchbar', {
          horizontal: !display || display === 'horizontal',
          vertical: display === 'vertical',
        })}
      >
        <input placeholder="London, United Kingdom" className="searchbar__input" onChange={this.inputChange}></input>
        <button className="btn success">Get Weather</button>
      </div>
    )
  }
}

export default Searchbar

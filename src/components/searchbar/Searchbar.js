import React, { Component } from 'react'
import cn from 'classnames'

import './Searchbar.scss'

class Searchbar extends Component {
  state = {
    value: '',
  }

  inputChange = e => this.setState({ value: e.target.value })

  render() {
    const { display, getValue } = this.props
    const { value } = this.state
    return (
      <div
        className={cn('searchbar', {
          horizontal: !display || display === 'horizontal',
          vertical: display === 'vertical',
        })}
      >
        <input placeholder="London, United Kingdom" className="searchbar__input" onChange={this.inputChange}></input>
        <button className="btn success" onClick={() => getValue(value)}>
          Get Weather
        </button>
      </div>
    )
  }
}

export default Searchbar

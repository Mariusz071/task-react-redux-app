import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from './ducks/actions'
import cn from 'classnames'

import './Searchbar.scss'

class Searchbar extends Component {
  state = {
    value: '',
  }

  inputChange = e => this.setState({ value: e.target.value })

  onSubmit = () => {
    const { value } = this.state
    const { getWeather } = this.props
    getWeather(value)
    this.setState({ value: '' })
  }

  render() {
    const { display } = this.props
    const { value } = this.state

    return (
      <div
        className={cn('searchbar', {
          horizontal: !display || display === 'horizontal',
          vertical: display === 'vertical',
        })}
      >
        <input
          placeholder="i.e London, United Kingdom"
          className="searchbar__input"
          value={value}
          onChange={this.inputChange}
        ></input>
        <button className="btn success" onClick={this.onSubmit}>
          Get Weather
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getWeather,
}

export default connect(
  null,
  mapDispatchToProps
)(Searchbar)

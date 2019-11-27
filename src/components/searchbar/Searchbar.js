import React, { Component } from 'react'
import cn from 'classnames'

import history from 'common/history'
import './Searchbar.scss'

class Searchbar extends Component {
  state = {
    value: '',
  }

  inputChange = e => this.setState({ value: e.target.value })

  onSubmit = () => {
    const { value } = this.state
    history.push(`/${value}`)
    this.setState({ value: '' })
  }

  render() {
    const { display, error } = this.props
    const { value } = this.state
    return (
      <div
        className={cn('searchbar', {
          horizontal: !display || display === 'horizontal',
          vertical: display === 'vertical',
        })}
      >
        <div className="searchbar__input">
          <input
            placeholder="i.e London, United Kingdom"
            className={cn('searchbar__field', { 'error-input': error })}
            value={value}
            onChange={this.inputChange}
          ></input>
          {error && <div className="error">{error.message}</div>}
        </div>
        <button disabled={!value} className={cn('btn', { disabled: !value, success: value })} onClick={this.onSubmit}>
          Get Weather
        </button>
      </div>
    )
  }
}

export default Searchbar

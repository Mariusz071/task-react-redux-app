import React, { Component } from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import get from 'lodash.get'
import history from 'common/history'
import './Searchbar.scss'

class Searchbar extends Component {
  state = {
    value: '',
  }

  inputChange = e => this.setState({ value: e.target.value })

  onSubmit = e => {
    e.stopPropagation()
    const { value } = this.state
    history.push(`/${value}`)
    this.setState({ value: '' })
  }

  render() {
    const { display, error } = this.props
    const { value } = this.state
    return (
      <div className="searchbar">
        <form
          className={cn('searchbar__form', {
            horizontal: !display || display === 'horizontal',
            vertical: display === 'vertical',
          })}
          onSubmit={e => this.onSubmit(e)}
        >
          <input
            placeholder="i.e London, United Kingdom"
            className={cn('searchbar__field', { 'error-input': error })}
            value={value}
            onChange={this.inputChange}
          ></input>
          {error && <div className="error">{error.message}</div>}
          <button disabled={!value} className={cn('btn', { disabled: !value, success: value })}>
            Get Weather
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: get(state, 'weather.error'),
})

export default connect(mapStateToProps, null)(Searchbar)

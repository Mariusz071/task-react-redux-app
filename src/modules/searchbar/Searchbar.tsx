import * as React from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import get from 'lodash.get'
import { history } from 'common/history'
import { DisplaySearchBar, Error } from './types'

import './Searchbar.scss'

interface Props {
  display: DisplaySearchBar
}

interface ReduxProps {
  error?: Error
}

const _Searchbar: React.FC<Props & ReduxProps> = ({ display, error }) => {
  const [value, setValue] = React.useState<string>('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    history.push(`/${value}`)
    setValue('')
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <div className='searchbar'>
      <form
        className={cn('searchbar__form', {
          horizontal: !display || display === 'horizontal',
          vertical: display === 'vertical',
        })}
        onSubmit={onSubmit}
      >
        <input
          placeholder='i.e London'
          className={cn('searchbar__field', { 'error-input': error })}
          value={value}
          onChange={onInputChange}
        ></input>
        {error && <div className='error'>{error.message}</div>}
        <button disabled={!value} className={cn('btn', { disabled: !value, success: value })}>
          Get Weather
            </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  error: get(state, 'weather.error')
})

export const Searchbar = connect<ReduxProps, any, Props>(mapStateToProps, null)(_Searchbar)

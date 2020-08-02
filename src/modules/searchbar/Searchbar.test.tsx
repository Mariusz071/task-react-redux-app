import * as React from 'react'
import { mount } from 'enzyme'

import Searchbar from './Searchbar'
import Root from 'common/Root'

let component

beforeEach(
  () =>
    (component = mount(
      <Root>
        <Searchbar display='vertical' />
      </Root>
    ))
)

afterEach(() => component.unmount())

it('renders input and submit button', () => {
  expect(component.find('input').length).toEqual(1)
  expect(component.find('.btn').length).toEqual(1)
})

describe('the input field', () => {
  let inputValue

  beforeEach(() => {
    component.find('input').simulate('change', { target: { value: 'London' } })
    component.update()
    inputValue = component.find('input').prop('value')
  })

  it('checks if input value is correct', () => {
    expect(inputValue).toEqual('London')
  })

  it('checks if input value is erased on submit', () => {
    const submitButton = component.find('.btn')
    expect(inputValue).toEqual('London')
    submitButton.simulate('click')
    expect(component.find('input').prop('value')).toEqual('')
  })
})

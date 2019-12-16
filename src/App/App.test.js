import React from 'react'
import { mount } from 'enzyme'

import App from './App'
import Navbar from 'components/navbar'
import Search from 'pages/search'

describe('the landing page', () => {
  let component

  beforeEach(() => (component = mount(<App />)))
  afterEach(() => component.unmount())

  it('renders navbar', () => {
    expect(component.find(Navbar).length).toEqual(1)
  })

  it('renders search page', () => {
    expect(component.find(Search).length).toEqual(1)
  })
})

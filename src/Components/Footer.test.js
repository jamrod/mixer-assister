import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

// We will describe a block of tests
describe('Footer', () => {
	// we will write one individual test
  it('Contains p with className foot', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Footer />)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.find('.foot').length).toBe(1)
  })
})
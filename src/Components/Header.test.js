// Import React
import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

// We will describe a block of tests
describe('Header Function', () => {
	// we will write one individual test
  it('Contain an h1 that says Mixer Assister!', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Header />)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<h1>Mixer Assister!</h1>)).toBe(true)
  })
})
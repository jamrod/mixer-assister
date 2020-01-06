import React from 'react'
import { shallow } from 'enzyme'

import Details from './Details'

// We will describe a block of tests
describe('Details', () => {
	// we will write one individual test
  it('Will receive props "searching" and return "Searching"', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Details />)
    component.setProps({searching: true})
    console.log(component.props('searching'))
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains('Searching')).toBe(true)
  })
})
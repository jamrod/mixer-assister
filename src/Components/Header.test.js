// Import React
import React from 'react'
import { shallow } from 'enzyme'

import HelloWorld from './HelloWorld'

// We will describe a block of tests
describe('Hello world component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<HelloWorld name={'Your name'} />)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains('Your name')).toBe(true)
  })
})
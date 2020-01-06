import React from 'react'
import { shallow } from 'enzyme'

import Explainer from './Explainer'

// We will describe a block of tests
describe('Explainer', () => {
	// we will write one individual test
  it('Contains p with id explainer', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Explainer />)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.find('#explainer').length).toBe(1)
  })
})
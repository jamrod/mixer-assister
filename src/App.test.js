// import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';

import React from 'react'
import { shallow } from 'enzyme'


describe('App test', () => {
	// we will write one individual test
  it('Contain a div with className app', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<App />)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.find('.App').length).toBe(1)
  })
})
// Import react and testing library
import React from 'react'
import { render } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'
// Added router because there are links in the NavBar file
import { BrowserRouter as Router } from 'react-router-dom'

import NavBar from './NavBar'

// Test to check that the app will display when called.
describe('<NavBar />', () => {
  it('should display', () => {
    render(<Router><NavBar/></Router>);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Router><NavBar/></Router>); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})
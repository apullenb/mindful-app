import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<Navbar />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
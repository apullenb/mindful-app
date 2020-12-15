import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LogNewEntry from './LogNewEntry';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<LogNewEntry />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<LogNewEntry />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
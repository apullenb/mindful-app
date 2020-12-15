import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ViewEntry from './ViewEntry';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<ViewEntry/>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ViewEntry />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
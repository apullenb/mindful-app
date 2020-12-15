import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Entry from '../DailyLog/Entry';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<Entry />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Entry />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
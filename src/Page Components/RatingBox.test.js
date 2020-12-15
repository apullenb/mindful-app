import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import renderer from 'react-test-renderer';
import RatingBox from './RatingBox';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<RatingBox />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<RatingBox />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
import React from 'react';
import ReactDOM from 'react-dom';
import AllEntryView from './AllEntryView'
import renderer from 'react-test-renderer';
import {BroswerRouter, Link} from 'react-router-dom'

it('renders without crashing', () => {
<BroswerRouter>
  const div = document.createElement('div');
    
  ReactDOM.render(<AllEntryView />, div);
 
  ReactDOM.unmountComponentAtNode(div);
  </BroswerRouter>
});

it('renders the UI as expected', () => {
    
    <BroswerRouter>
    
      .create(<AllEntryView />)
      .toJSON();
      </BroswerRouter>
      const tree = renderer  
    expect(tree).toMatchSnapshot();  
    
    });
import React from 'react';
import ReactDOM from 'react-dom';
import AllJournalEntries from './AllJournalEntries'
import renderer from 'react-test-renderer';
import {BroswerRouter, Link} from 'react-router-dom'

it('renders without crashing', () => {
<BroswerRouter>
  const div = document.createElement('div');
    
  ReactDOM.render(<AllJournalEntries />, div);
 
  ReactDOM.unmountComponentAtNode(div);
  </BroswerRouter>
});

it('renders the UI as expected', () => {
    
    <BroswerRouter>
    
      .create(<AllJournalEntries />)
      .toJSON();
      </BroswerRouter>
      const tree = renderer  
    expect(tree).toMatchSnapshot();  
    
    });
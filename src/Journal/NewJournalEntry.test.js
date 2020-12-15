import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewJournalEntry from './NewJournalEntry';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<NewJournalEntry/>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<NewJournalEntry/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
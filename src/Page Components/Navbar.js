import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';


function Navbar() {
 


  return (
    <div className="Navbar">
       <nav role="navigation">
        <Link to ="/Dashboard">  Dashboard |</Link>
        <Link to ="/AllEntryView"> Daily Log |</Link>
        <Link to="/LogNewEntry"> New Log Entry |</Link>
        <Link to="/NewJournalEntry"> Journal Entry |</Link>
        <Link to="/AllJournalEntries"> My Journal </Link>
        
        
        
    </nav>
    </div>
  );
}

export default Navbar;

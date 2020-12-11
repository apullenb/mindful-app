import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';


function Navbar(props) {
 console.log(props)


  return (
    <div className="Navbar">
       <nav role="navigation">
        <Link to ="/Dashboard">  Dashboard |</Link>
        <Link to ="/AllEntryView"> View All Days |</Link>
        {/* <Link to="/LogNewEntry"> New Log Entry |</Link> */}
        {/* <Link to="/NewJournalEntry"> Journal Entry |</Link> */}
        <Link to="/AllJournalEntries"> Journal | </Link>
        <a>LogOut</a>
        
        
        
    </nav>
    </div>
  );
}

export default Navbar;

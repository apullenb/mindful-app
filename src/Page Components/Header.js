import React, {useState, useEffect} from 'react';
import './Header.css';
import Navbar from './Navbar';


function Header(props) {


return(
       
    <div className="header">
      <h1>Mindful</h1>
      <p><Navbar setAuth={props.setAuth}/></p>
    </div>
  );

}
export default Header;

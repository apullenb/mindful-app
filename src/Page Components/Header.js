import React, {useState, useEffect} from 'react';
import './Header.css';
import Navbar from './Navbar';


function Header(props) {


return(
       
    <div className="header">
     
      <h1>Mindful</h1>
      {props.isAuth === true ? 
      <Navbar setAuth={props.setAuth}/> : ''  }
      
    </div>
  );

}
export default Header;

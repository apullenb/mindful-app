import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <div className="">
      <section className="">
        {props.isAuth === true ? <Navbar setAuth={props.setAuth} /> : " "}
      </section>
      <section className="header">
        <h1>Mindful</h1>
      </section>
    </div>
  );
}
export default Header;

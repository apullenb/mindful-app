import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
  const [nav, setNav] = useState("show-nav mobile");
console.log(nav)
  function displayNav() {
    nav === "show-nav mobile" ? setNav("show-nav") : setNav("hidden");
    nav === 'hidden' ? setNav('show-nav') : setNav('hidden')
  }
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
  };

  return (
    <div>
      <button className="nav-button" onClick={displayNav}>
        <FontAwesomeIcon icon="bars" />{" "}
      </button>
      <div className={nav}>
        <section className="nav">
          <nav role="navigation">
            <Link to="/Dashboard"> Dashboard </Link>
            <Link to="/AllEntryView"> View All Days </Link>
            <Link to="/AllJournalEntries"> Journal </Link>
            <a onClick={logout}>LogOut</a>
            <button
              className="nav-button"
              style={{
                padding: "3px",
                fontSize: "14px",
                marginTop: "8px",
                marginBottom: "1px",
              }}
              onClick={displayNav}
            >
              {" "}
              X Close{" "}
            </button>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ViewEntry from "./ViewEntry";
import background from "./journal-back.png";
import moment from "moment";
import "./journalEntry.css";

function Entry(props) {
  const dateFormat = moment(props.journal.date).format("LL");
  const [display, setDisplay] = useState("hide");

  function showContent() {
    setDisplay("expand");
  }
  function close() {
    setDisplay("hide");
  }
  return (
    <div>
      <div className="entry">
        <h5 className="entry-date"> Date: {dateFormat}</h5>
        <h4 className="entry-title">Title: {props.journal.title} </h4>
        <h4 className="mood">Mood: {props.journal.mood}</h4>

        <p>
          {" "}
          <button id="all-journal" onClick={showContent}>
            {" "}
            View Entry
          </button>
        </p>

        <section className={display}>
          <p className="content">{props.journal.content}</p>
          <button id="all-journal" onClick={close}>
            {" "}
            X Close{" "}
          </button>
        </section>
      </div>
    </div>
  );
}

export default Entry;

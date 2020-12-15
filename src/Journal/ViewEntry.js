import React from "react";
import moment from "moment";
import "./journalEntry.css";

function ViewEntry(props) {
  const content = props.location.state.content;
  const date = moment(props.location.state.date).format("LL");

  return (
    <div className="journal">
      <h2>Journal Entry</h2>
      <div className="journal-entry">
        <h3>Entry Title: {props.location.state.title}</h3>
        <h4 className="journal-date">Date: {date}</h4>
        <div className="lines"></div>
        <h4>Mood: {props.location.state.mood}</h4>
        <div className="list">
          <h4>Entry: </h4>{" "}
          <p className="text">{props.location.state.content} </p>
          <p className="list"> </p> <p className="text"> </p>
        </div>
      </div>
    </div>
  );
}

export default ViewEntry;

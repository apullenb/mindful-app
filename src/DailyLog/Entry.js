import React from "react";
import "../Pages/Pages.css";
import { Link } from "react-router-dom";
import moment from "moment";

function Entry(props) {
  const entry = props.log;
  const date = moment(entry.date).format("LL");

  return (
    <div style={entryStyle}>
      <p>Date: {date}</p>
      <p>Mood on This Day</p>
      <p>Happiness: {entry.rate_happiness}</p>
      <p>Focus: {entry.rate_focus}</p>
      <p>Energy: {entry.rate_energy}</p>
      <p>
        <Link
          to={{ pathname: `/activities/${props.log.id}`, state: props.log }}
        >
          <button>View This Day</button>
        </Link>
      </p>
    </div>
  );
}
const entryStyle = {
  background: "#2C5281",
  color: "white",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "12px",
  paddingBottom: "12px",
  textAlign: "center",
  boxShadow: "0px 5px 3px black",
  margin: "3px",
  
};
export default Entry;

import React from "react";
import { useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RatingBox(props) {
  const elements = props.rate;

  const star = (
    <FontAwesomeIcon
      icon="star"
      style={{ color: "yellow", fontSize: "22px", margin: "3px" }}
    />
  );
  
  // Will calulate the average rating and determine which date had the highest rating (rounded up)
  function bestRating() {
    let rating = 0;
    let date = "";
    for (let i = 0; i < elements.length; i++) {
      if (elements.length === 0) {
        return " No Entries Yet. Add New Entries to See Average Rating";
      }
      if (
        (elements[i].rate_happiness +
          elements[i].rate_focus +
          elements[i].rate_energy) /
          3 >
        rating
      ) {
        rating =
          (elements[i].rate_happiness +
            elements[i].rate_focus +
            elements[i].rate_energy) /
          3;
        date = elements[i].date;
      }
    }
    rating = Math.round(rating);
    const dateFormat = moment(date).format("LL");
    return (
      <div style={ratingBoxStyle}>
        <p style={{ fontWeight: "600" }}>{dateFormat}</p>
        <p style={{ fontWeight: "600" }}>Mood Rating: </p>
        {Array(rating).fill(star)}
      </div>
    );
  }
  const string = bestRating();
  return (
    <div>
      <span>{string}</span>
    </div>
  );
}

const ratingBoxStyle = {
  alignItems: "center",
  color: "white",
  paddingTop: "15px",
  paddingBottom: "15px",
  paddingLeft: "20px",
  paddingRight: "20px",
  textAlign: "center",
  border: "2px dashed white",
};

export default RatingBox;

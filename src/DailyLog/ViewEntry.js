import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import config from '../config'
import "./entry.css";

function ViewEntry(props) {
  const entry = props.location.state;
  const date = moment(props.location.state.date).format("LL");

  const [food, setFood] = useState('')
console.log(food)
  async function getFood() {
  const response = await fetch(`${config.API_ENDPOINT}/api/food`, {
    method: "GET",
    headers: { token: localStorage.token },
  });
  const parseRes = await response.json();
  const today = parseRes.filter(
    (day) => moment(day.date).format("LL") == date
  );
  setFood(today[0])
  }

  useEffect(() => {
    getFood()
  }, [])

  function totalScore() {
    let rating =
      (entry.rate_energy + entry.rate_focus + entry.rate_happiness) / 3;
    let tRating = Math.round(rating);
    return <p> {Array(tRating).fill(star)}</p>;
  }
  const star = <FontAwesomeIcon icon="star" style={{ color: "yellow" }} />;
  function renderHStar() {
    const eNumber = entry.rate_happiness;
    return <p> {Array(eNumber).fill(star)}</p>;
  }
  function renderFStar() {
    const eNumber = entry.rate_focus;
    return <p>{Array(eNumber).fill(star)}</p>;
  }
  function renderEStar() {
    const eNumber = entry.rate_energy;
    return Array(eNumber).fill(star);
  }
  return (
    <div className="entry-card">
      <div className="box">
        <p className="date">Date: {date}</p>
        <h4>What You Did Today:</h4>
        <p className="title">You Ate:</p>
        <p className="content">Breakfast: {food.breakfast}</p>
        <p className="content">Lunch: {food.lunch}</p>
        <p className="content">Dinner: {food.dinner}</p>
        <p className="content">Snacks: {food.snacks}</p>
        <p className="title">Medicine:</p>
        <p className="content">{entry.medicine}</p>
        <p className="title">Hours You Slept:</p>
        <p className="content">{entry.hours_slept} hours</p>
        <p className="title">Amount of Sugar You Had:</p>
        <p className="content">{entry.sugar_intake} servings</p>
      </div>
      <div className="rating-box">
        <h4> Rating For This Day:</h4>
        <p className="title-rating">Happiness:</p>
        <p className="rating">{renderHStar()}</p>
        <p className="title-rating">Focus:</p>
        <p className="rating">{renderFStar()}</p>
        <p className="title-rating">Energy:</p>
        <p className="rating">{renderEStar()}</p>
        <p className="title-rating overall">
          Mood Score For Today: {totalScore()}
        </p>
      </div>
    </div>
  );
}

export default ViewEntry;

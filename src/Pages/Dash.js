import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import AllEntryView from "../DailyLog/AllEntryView";
import AllJournalEntries from "../Journal/AllJournalEntries";
import RatingBox from "../Page Components/RatingBox";
import "./Dashboard.css";
import config from "../config";
import moment from "moment";
import LogNewEntry from "../DailyLog/LogNewEntry";
import Food from "../DailyLog/AddFood";

function Dash(props) {

    const [name, setName] = useState("");
    const [today, setToday] = useState("");
    const [food, setFood] = useState('')
    const [all, setAll] = useState("");

   

     //Displays today's date
  let newDate = new Date();
  let dateToday = moment(newDate).format("LL");

// Retrieves the user's name
async function getName() {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/dashboard`, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.username);
    } catch (error) {
      console.error(error.message);
    }
  }
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
  };

  // Fetches & Displays information entered today:
  async function getToday() {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/api/activity`, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setAll(parseRes);

      const thisDay = parseRes.filter(
        (day) => moment(day.date).format("LL") == dateToday
      );
      setToday(thisDay[0]);
      const responseF = await fetch(`${config.API_ENDPOINT}/api/food`, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseResF = await responseF.json();
      const todayF = parseResF.filter(
        (day) => moment(day.date).format("LL") == dateToday
      );
      setFood(todayF[0])
    } catch (error) {
      console.error(error.message);
    }
  }

  // Displays the information entered today or a prompt to enter info
  function showToday() {
    if (today === "" || today === undefined) {
      return (
        <div className="today-dash-none">
          <h4>
            No Entries Yet Today.</h4>
            <p> Don't forget to record your entry for today!</p>
            <Link
            to={{ pathname: "/LogNewEntry", state: food}}>  <button style={{ margin: "15px", textAlign: "center" }} >
                  Record New Activity
                </button></Link>
            <p>{' '}</p>
          
        </div>
      );
    } else {
      return (
        <section>
          <div>
            <div>
              <p> </p>
            </div>
            <p id="title">Medicine:</p>
            <p> {today.medicine}</p>
          </div>
          <div>
            <p id="title">Sleep:</p>
            <p> {today.hours_slept} hours</p>
          </div>
          <div>
            <p id="title">Sugar Consumed:</p>
            <p> {today.sugar_intake} servings</p>
          </div>
        </section>
      );
    }
  }
  // Display Rating Box
  function showRating() {
    if (all === undefined || all === "") {
      return <div>'Add Entries to View Rating'</div>;
    } else {
      return (
        <div>
          <RatingBox rate={all} />
        </div>
      );
    }
  }


  useEffect(() => {
    getName();
    getToday();
  }, []);

    return (
        <div>
            <div className="all">
        <section className="headline">
          <h2>Dashboard</h2>
          <h2>Hello {name}!</h2>
          <div style={{textAlign:"right"}}>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                fontWeight: "600",
                margin: "10px 1px",
              }}
            >
              Today is: {dateToday}{" "}
            </p>
            <p>
              <button style={{fontSize:'14px',  margin:'1px 0px'}} onClick={(e) => logout(e)}>Log Out</button>
            </p>
          </div>
        </section>
        <section className='row'>
            <div className='card'>
            {showToday()}
            </div>
            <div className= 'card-dash'>
              <h4>Meals Today</h4>
            <Food food ={food} />
            </div>
        </section>
        </div>
    </div>
    )
}

export default Dash

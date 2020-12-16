import React, { Fragment, useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import AllEntryView from "../DailyLog/AllEntryView";
import AllJournalEntries from "../Journal/AllJournalEntries";
import RatingBox from "../Page Components/RatingBox";
import "./Dashboard.css";
import config from "../config";
import moment from "moment";
import LogNewEntry from "../DailyLog/LogNewEntry";

const Dashboard = (props) => {
  const [name, setName] = useState("");
  const [today, setToday] = useState("");
  const [all, setAll] = useState("");
  const [popup, setPopup] = useState("hidden");
  const [component, setComponent] = useState("");
  const [journal, setJournal] = useState("hiddenz");

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
    } catch (error) {
      console.error(error.message);
    }
  }

  function showToday() {
    if (today === "" || today === undefined) {
      return (
        <div>
          <h4 style={{ textAlign: "center", margin: "1px", padding: "1px" }}>
            No Entries Yet Today.
            <p> Don't forget to record your entry for today!</p>
            <p>{' '}</p>
          </h4>
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
            <p id="title">Food:</p>
            <p> {today.food}</p>
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

  // The following functions control popup/expanding components using state
  function showActivityForm() {
    setPopup("show");
    setComponent(<LogNewEntry close={setPopup} />);
    getToday();
    
  }
  function showPreviousDay() {
    setPopup("show");
    setComponent(<AllEntryView close={setPopup} />);
    getToday();
  }

  function closeButton() {
    setPopup("hidden");
    getToday();
   
  }

  function showJournal() {
    journal === "hiddenz"
      ? setJournal("expand-journal")
      : setJournal("hiddenz");
      getToday();
  }

  // end of popup components 

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
  };

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
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Today is: {dateToday}{" "}
            </p>
            <p>
              <button onClick={(e) => logout(e)}>Log Out</button>
            </p>
          </div>
        </section>
        <section className={popup} >
        <button onClick={closeButton}> X Close</button>
        {component}{" "}
      </section>
        <section className="row">
          <section className="today card">
            <div>
              <h3
                style={{ margin: "8px", textAlign: "center", color: "#174163" }}
              >
                Your Day Today:
              </h3>
            </div>
            <div>
              <p> </p>
              {showToday()}
            </div>
          </section>
          <section className="">
            <div id="title">
              <h3
                style={{ margin: "8px", textAlign: "center", color: "#174163" }}
              >
                {" "}
                Your Best Day Was:
              </h3>
            </div>
            <div style={{ margin: "8px", textAlign: "center" }}>
              {showRating()}
            </div>
            <section>
              <div style={{ margin: "8px", textAlign: "center" }}>
                <button
                  style={{ margin: "15px", textAlign: "center" }}
                  onClick={showPreviousDay}
                >
                  View Previous Days
                </button>
              </div>
              <div style={{ margin: "8px", textAlign: "center" }}>
              <Link
            to={{ pathname: "/LogNewEntry"}}>  <button style={{ margin: "15px", textAlign: "center" }} >
                  Record New Activity
                </button></Link>
              </div>
            </section>
          </section>
        </section>
        
        <section className="new">
          <div className="show-journal" onClick={showJournal}>
            {name}'s JOURNAL
            <p>Click to View Your Journal Entries</p>
          </div>
          <section className={journal} >
            <h6 onClick={showJournal}> X Close</h6>
            <AllJournalEntries />
            <h6 onClick={showJournal}> X Close</h6>
          </section>
        </section>
      </div>
      <section></section>
    </div>
  );
};
export default Dashboard;

import React from "react";
import LoginForm from "../Forms/LoginForm";
import "./Pages.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="home">
        <h2 id="home-head">Be Intentional About Your Mental Health</h2>
        <ul id="home-list">
          <li>Learn About Yourself and Your Daily Habits</li>
          <li>
            Improve Your Mental Health and Create New Habits That Help You Feel
            Your Best
          </li>
        </ul>
      </section>
      
      <section className="card">
        <header className="section-title">
          Record Daily Activities & Medicine
        </header>
        <p>
          Log your food, sleep, medicine and other common factors known to
          effect your mood.
        </p>
      </section>
      <section className="card">
        <header className="section-title">Rate Yourself</header>
        <p>
          At the end of each day, rate your energy level, happiness, & focus to
          calculate your mood score for the day.
        </p>
      </section>
      <section className="card">
        <header className="section-title">Track Your Mental Health</header>
        <p>
          As you add new entries each day, your days with the highest mood score
          will be displayed so you can identify which habits impact your mood
          the most.
        </p>
      </section>
      <section className="card">
        <header className="section-title">Let it All Out</header>
        <p>
          Journaling has been shown to have a positive effect on overall mental
          health. Use the journal section to record your thoughts and just vent.
        </p>
      </section>
    
      <div id="start-now">
        <header>
          <h3>Start Feeling Great Now!</h3>
        </header>
        <Link to={{ pathname: "/register" }}>
          <button>Create Account</button>
        </Link>{" "}
        <Link to={{ pathname: "/login" }}>
          <button>Account Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import React, {Component, useContext, Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom' 
import Header from './Page Components/Header';
import Footer from './Page Components/Footer';
import Home from './Pages/Home';
import LoginForm from './Forms/LoginForm';
import NewJournalEntry from './Journal/NewJournalEntry';
import AllJournalEntries from './Journal/AllJournalEntries';
import AllEntryView from './DailyLog/AllEntryView';
import Dashboard from './Pages/Dashboard';
import Register from './Forms/Register';
import LogNewEntry from './DailyLog/LogNewEntry';
import ViewEntry from './Journal/ViewEntry';
import ViewActivity from './DailyLog/ViewEntry';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCoffee, faStar, faBars } from '@fortawesome/free-solid-svg-icons';
import config from './config';


import './App.css'

library.add(faPlus, faCoffee, faStar, faBars)

 
const App = () => {
  useEffect(() => {
    isAuthCheck();
  }, []);

  // Determines if a user is authorized or not and controls what info the user can view
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  //checks to see if the user is authorized before displaying private content
  async function isAuthCheck() {
    try {
      const response = await fetch(
        `${config.API_ENDPOINT}/api/users/isverified`,
        {
          method: "GET",
          headers: { token: localStorage.token },
        }
      );
      const parseRes = await response.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <Router>
        <div className="App">
          <Header setAuth={setAuth} isAuth={isAuthenticated} />

          <Switch>
            <Route
              exact
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <LoginForm {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/Dashboard" />
                )
              }
            />
            <Route
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/Dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
          <Route
            path="/alljournalentries"
            render={(props) =>
              isAuthenticated ? (
                <AllJournalEntries {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/journal/:journalId" component={ViewEntry} />
          <Route path="/activities/:activityId" component={ViewActivity} />
          <Route path="/AllEntryView" component={AllEntryView} />
          <Route path="/NewJournalEntry" component={NewJournalEntry} />
          <Route path="/LogNewEntry" component={LogNewEntry} />

          <Route exact path="/" component={Home} />

          <Footer />
        </div>
      </Router>
    </Fragment>
  );
};

export default App;

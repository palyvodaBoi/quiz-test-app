import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import LoginPage from "./LoginPage/LoginPage";
import GamePage from "./GamePage/GamePage";
import ResultsPage from "./ResultsPage/ResultsPage";
import NoMatch from "./NoMatch/NoMatch";

function App(props) {
  const {inProgress, userName, onSetInProgress, onSetUserName} = props

  useEffect(() => {
    const inProgressLoc = sessionStorage.getItem('inProgress')
    const userNameLoc = sessionStorage.getItem('userName')

    if (inProgressLoc) onSetInProgress(inProgressLoc === 'true')
    if (userNameLoc) onSetUserName(userNameLoc)
  }, [onSetInProgress, onSetUserName])

  const setUserHandler = (userName) => {
    sessionStorage.setItem('userName', userName);
    onSetUserName(userName)
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          { userName
            ? <Redirect to="/" />
            : <LoginPage setUser={setUserHandler} />
          }
        </Route>
        <Route exact path="/">
          { userName
            ? <GamePage />
            : <Redirect to="/login" />
          }
        </Route>
        <Route path="/results">
          { userName
            ? inProgress
              ? <Redirect to="/" />
              : <ResultsPage userName={userName} />
            : <Redirect to="/login" />
          }
        </Route>
        <Route path="*">
          <NoMatch userName={userName} />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    inProgress: state.inProgress,
    userName: state.userName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetUserName: (userName) => dispatch({type: actionTypes.SET_USER_NAME, userName}),
    onSetInProgress: (value) => dispatch({type: actionTypes.SET_IN_PROGRESS, value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

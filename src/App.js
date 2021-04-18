import React from 'react';
import './App.css';
import WebcamCapture from "./WebcamCapture";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <div className='app__body'>
            <Switch>
              <Route exact path="/test">
                <h1>Snapchat Clone</h1>
                <h2>Camera</h2>
              </Route>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;

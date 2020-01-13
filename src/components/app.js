import React from "react";
import { Component } from "react";
import "../index.css";

//import ImageList from "../container/imageList";
import Carousel from "../carousel"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <nav>
            <ul className = "menu-main">
              <li className = "current">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Slider">Slider</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Slider">
              <Slider /> 
              <div>
                <Carousel />
                <div id = "demo-carousel"></div>
                <div id = "value"></div>
            </div>
            <button id = 'increment'>On</button>
            <button className = 'next'>Off</button>
            </Route>
            <Route path="/">
              <Home />
              <div className="welcome">Welcome to the photo viewer app!</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}
  
function Slider() {
  return <h2>Slider</h2>;
}

/*const store = createStore(reducers);

store.subscribe(render);

const valueEl = document.getElementById('value');

// 3. When the subscription callback runs:
function render() {
    // 3.1) Get the current store state
    const state = store.getState();

    // 3.2) Extract the data you want
    const newValue = state.toString();

    // 3.3) Update the UI with the new value
    valueEl.innerHTML = newValue;
}

// 4) Display the UI with the initial store state
render();

// 5) Dispatch actions based on UI inputs
document.getElementById("increment")
    .addEventListener('click', () => {
        store.dispatch({type : "INCREMENT"});
    })*/
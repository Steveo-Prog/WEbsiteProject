import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./components/pages/home";
import About from "./components/pages/about";
import CV from "./components/pages/cv";
import Projects from "./components/pages/projects";

import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: "100%", padding: "0px"}}>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/cv" element={<CV />}/>
            <Route exact path="/projects" element={<Projects />}/>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
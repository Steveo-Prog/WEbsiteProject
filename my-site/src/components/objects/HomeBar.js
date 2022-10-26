import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class HomeBar extends Component {
  render() {
    return (
    <div style={{width: "100%",backgroundColor: "purple", position: "fixed", top: "0"}}>
        <div id='linkBox' style={{float: "left", padding: "1em"}}><h4><Link to="/">HOME</Link></h4></div>
        <div id='linkBox' style={{float: "left", padding: "1em"}}><h4><Link to="/about">ABOUT ME</Link></h4></div>
        <div id='linkBox' style={{float: "left", padding: "1em"}}><h4><Link to="/CV">CV</Link></h4></div>
        <div id='linkBox' style={{float: "left", padding: "1em"}}><h4><Link to="/projects">PROJECTS</Link></h4></div>
        {/*<h1 style={{padding: "1em"}}>Welcome Fuck nuts</h1>*/}
    </div>
    )
  }
}

export default HomeBar
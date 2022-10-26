import React, { Component } from 'react'
import HomeBar from "../objects/HomeBar"

export class home extends Component {
  render() {
    return (
      <div style={{width: "100%",minHeight: "100%", textAlign: "center", marginTop: "5%"}}>
        <HomeBar />
        <h2>FUCKING FINALLY!!</h2>
        <h3>Please Be aware, this site is still a work in progress</h3>
        <h4>SUP PEEPS</h4>

        <p>Hello there</p>
        <nbsp/>
        <p>General Kenobi!</p>
      </div>
    )
  }
}

export default home
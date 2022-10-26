import React, { Component } from 'react'
import HomeBar from "../objects/HomeBar"

export class about extends Component {
  render() {
    return (
        <div>
            <HomeBar />
            <div style={{paddingTop: "3.5em", textAlign: "center"}}>
              <h1>
                  About
              </h1>
            </div>
        </div>
    )
  }
}

export default about
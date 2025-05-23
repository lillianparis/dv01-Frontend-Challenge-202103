import React, { Component } from 'react'
import './App.css'
import GradeTable from './components/Table' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>HELLO WORLD</p>
        <p>CHARTS AND GRAPHS</p>
        <GradeTable />
      </div>
    )
  }
}

export default App

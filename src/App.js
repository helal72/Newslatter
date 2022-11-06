import React, { Component } from 'react'
import Navbar from './Componants/Navbar'
import News from './Componants/News'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={10} country ='us' category = 'sports'/>
      </div>
    )
  }
}

export default App

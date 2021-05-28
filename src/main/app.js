import React from 'react'
import Routes from './routes.js'
import Navbar from '../components/navbar.js'
import '../styles/global.css'
import '../styles/fonts.css'

class App extends React.Component {

  render() {


    return(
      <>
        <Navbar />
        <Routes />
      </>
    )
  }

}

export default App;

import React from 'react'
import Routes from './routes.js'

import '../styles/global.css'
import '../styles/fonts.css'
import '../styles/app.css'

import 'toastr/build/toastr.min.js'
import 'toastr/build/toastr.css'

class App extends React.Component {



  render() {
    return(
      <>
        <Routes />
      </>
    )
  }
}

export default App;

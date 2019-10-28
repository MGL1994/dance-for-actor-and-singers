import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Classes from './components/pages/Classes'

import './style.scss'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/classes" component={Classes} />
        </Switch>
        <Footer />
      </HashRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
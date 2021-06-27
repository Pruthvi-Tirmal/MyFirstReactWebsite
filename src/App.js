import React from 'react'
import Home from './components/Home'
import About from './components/About'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  )
}

export default App


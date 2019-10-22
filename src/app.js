import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/style.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './components/common/Home'
import LeagueTable from './components/Teams/LeagueTable'
import Fixtures from './components/Teams/Fixtures'
import TeamIndex from './components/Teams/TeamIndex'
import Odds from './components/Teams/Odds'
import TeamShow from './components/Teams/TeamShow'

const App = () => (
  <BrowserRouter>
    <nav
      className='navbar custom-header'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item custom-header-item' to='/'>
          <img
            src='https://imgur.com/SAlvDTF.png'
            alt='From Brussels with Love'
            max-width='30'
            max-height='30'
            padding='0px'
          ></img>
          <img
            src='https://publications.europa.eu/code/images/scan/5000100-flag.jpg'
            alt='From Brussels with Love'
          ></img>
          <img
            src='https://imgur.com/SAlvDTF.png'
            alt='From Brussels with Love'
          ></img>
        </Link>
      </div>
      <Link className='navbar-item custom-header-item' to='/'>
        Home
      </Link>
      <Link className='navbar-item custom-header-item' to='/table'>
        Table
      </Link>
      <Link className='navbar-item custom-header-item' to='/fixtures'>
        Fixtures
      </Link>
      <Link className='navbar-item custom-header-item' to='/teams'>
        Teams
      </Link>
      <Link className='navbar-item custom-header-item' to='/odds'>
        Odds
      </Link>
    </nav>

    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/table' component={LeagueTable} />
        <Route path='/fixtures' component={Fixtures} />
        <Route path='/teams' component={TeamIndex} />
        <Route path='/odds' component={Odds} />
        <Route path='/teams' component={TeamShow} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

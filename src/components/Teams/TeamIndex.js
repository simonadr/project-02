import React from 'react'
import axios from 'axios'

import TeamCard from './TeamCard'

class TeamIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      teams: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const apiCreds = {
      // login token needs to be sorted!!!
      headers: { 'X-Auth-Token': 'ee1b2de3de6142b49d3eb9ae44fe1244' }
    }
    axios
      .get('http://api.football-data.org/v2/teams/', apiCreds)
      .then(res => {
        this.setState({ teams: res.data })
      })
      .catch(err => console.log(err))
  }

  handleClick(event) {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
  }

  render() {
    console.log(this.state)
    if (!this.state.teams) return null
    return (
      <section className='section'>
        <div className='container' onClick={this.handleClick(event)}>
          <div className='columns is-mobile is-multiline'>
            {this.state.teams.teams.map(team => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default TeamIndex

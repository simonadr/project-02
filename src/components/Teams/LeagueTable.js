import React from 'react'
import axios from 'axios'
import Clock from '../common/Clock'

class LeagueTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = { teams: null }
  }

  componentDidMount() {
    const apiCreds = {
      // login token needs to be sorted!!!
      headers: { 'X-Auth-Token': 'ee1b2de3de6142b49d3eb9ae44fe1244' }
    }
    axios
      .get(
        'https://api.football-data.org/v2/competitions/2021/standings',
        apiCreds
      )
      .then(res => {
        this.setState({ teams: res.data })
      })
      .catch(err => console.log(err))
  }

  renderTableData() {
    return this.state.teams.standings[0].table.map(team => {
      const { position, playedGames, points, goalDifference } = team // destructuring
      return (
        <tr key={team.position}>
          <td align='center'>{position}</td>
          <td align='left'>{team.team.name}</td>
          <td align='center'>{playedGames}</td>
          <td align='center'>{points}</td>
          <td align='center'>{goalDifference}</td>
        </tr>
      )
    })
  }

  render() {
    console.log(this.state)
    if (!this.state.teams) return null
    return (
      <>
        <h1>
          Barclays Premier League table as of [date] at <Clock />
        </h1>

        <div className='table-container center-text'>
          <table id='teamsTable'>
            <thead>
              <tr>
                <th align='center'>Position</th>
                <th align='left'>Team</th>
                <th align='center'>Games Played</th>
                <th align='center'>Points</th>
                <th align='center'>Goal Difference</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </>
    )
  }
}

export default LeagueTable

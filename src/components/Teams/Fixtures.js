import React from 'react'
import axios from 'axios'
class Fixtures extends React.Component {
  constructor() {
    super()
    this.state = { fixtures: null }
  }
  componentDidMount() {
    const apiCreds = {
      // login token needs to be sorted!!!
      headers: { 'X-Auth-Token': 'ee1b2de3de6142b49d3eb9ae44fe1244' }
    }
    // axios.all([
    axios
      .get(
        'https://api.football-data.org/v2/competitions/2021/matches?matchday=9',
        apiCreds
      )
      .then(res => {
        this.setState({ fixtures: res.data })
      })
      .catch(err => console.log(err))
  }
  renderTableData() {
    // const objectoArray =
    //   Object.keys(
    //     this.state.fixtures.matches.map(fixture => this.state.fixtures.matches[fixture])
    //   )

    return this.state.fixtures.matches.map(fixture => {
      console.log(fixture)
      const { homeTeam, awayTeam } = fixture
      return (
        <tr key={fixture.id}>
          <td align='center'>{homeTeam.name}</td>
          <td align='center'>{awayTeam.name}</td>
        </tr>
      )
    })
  }
  render() {
    // console.log(this.state)
    if (!this.state.fixtures) return null
    return (
      <>
        <div className='table-container center-text'>
          <h1> Premier League Week 9</h1>,
          <table id='teamsTable'>
            <thead>
              <tr>
                <th align='center'>Home Team</th>
                <th align='center'>Away Team</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </>
    )
  }
}
export default Fixtures

// import React from 'react'
// import axios from 'axios'

// // import XXXsCard from './XXXsCard'

// class Odds extends React.Component {
//   constructor() {
//     super()

//     this.state = { odds: null }
//     // console.log(this.matches)
//   }

//   componentDidMount() {
//     // const apiCreds = {
//     //   // login token needs to be sorted!!!
//     //   headers: { }

//     axios
//       .get(
//         'https://app.oddsapi.io/api/v1/odds?league=soccer-england-premier-league'
//       )
//       .then(res => {
//         // console.log(res.data)
//         this.setState({ odds: res.data })
//         // console.log({ this.matches })
//       })
//       .catch(err => console.log(err))
//   }

//   render() {
//     console.log(this.state)
//     if (!this.state.odds) return null
//     return (
//       <>
//         <h1>EPL Odds</h1>
//         <h2>As of XXXX</h2>
//         {/* {this.state.odds.matches.map(fixture => (
//           <p key={fixture.id}>
//             {fixture.homeTeam.name} vs {fixture.awayTeam.name}
//           </p>
//         ))} */}
//       </>
//     )
//   }
// }

// export default Odds

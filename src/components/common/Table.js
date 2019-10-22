// import React from 'react'

// class Table extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       teams: [
//         {XpositionX: null}
//       ]
//     }
//   }

//   renderTableHeader() {
//     let header = Object.keys(this.state.teams[0])
//     return header.map((key, index) => {
//       return <th key={index}>{key.toUpperCase()}</th>
//     })
//   }

//   renderTableData() {
//     return this.state.XteamsX.map((XteamX, index) => {
//       const { position, team.name, points } = team // destructuring
//       return (
//         <tr key={position}>
//           <td>{position}</td>
//           <td>{team.name}</td>
//           <td>{points}</td>
//         </tr>
//       )
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>My first table</h1>
//         <table id='teams'>
//           <tbody>
//             <tr>{this.renderTableHeader()}</tr>
//             {this.renderTableData()}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

// export default Table

import React from 'react'
import TeamCard from './TeamCard'

class TeamShow extends React.Component {
  render() {
    return <h1>iou</h1>
  }
}

export default TeamShow

// // class XXXsShow extends React.Component {
// //   constructor() {
// //     super()

// //     this.state = { XXX: null }
// //   }

// //   componentDidMount() {
// //     const XXXId = this.props.match.params.id
// //     axios
// //       .get(`https://XXX.herokuapp.com/XXXs/${XXXId}`)
// //       .then(res => this.setState({ XXX: res.data }))
// //       .catch(err => console.log(err))
// //   }

// //   render() {
// //     if (!this.state.XXX) return null
// //     const { XXX } = this.state
// //     return (
// //       <section className='section'>
// //         <div className='container'>
// //           <h2 className='title'>{XXX.name}</h2>
// //           <hr />
// //           <div className='columns'>
// //             <div className='column is-half'>
// //               <figure className='image'>
// //                 <img src={XXX./*image*/} alt={XXX./*name*/} />
// //               </figure>
// //             </div>
// //             <div className='column is-half'>
// //               <h4 className='title is-4'>Tasting Notes</h4>
// //               <p>{XXX./*tastingNotes*/}</p>
// //               <hr />
// //               <h4 className='title is-4'>Origin</h4>
// //               <p>{XXX./*origin*/}</p>
// //               <hr />
// //               <h4 className='title is-4'>Grape</h4>
// //               <p>{XXX./*grape*/}</p>
// //               <hr />
// //               <h4 className='title is-4'>Posted by:</h4>
// //               <p>{XXX./*user*/./*username*/}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     )
// //   }
// // }

// // export default WinesShow

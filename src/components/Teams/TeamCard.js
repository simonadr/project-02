import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ name, crestUrl, id }) => (
  <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile'>
    <Link to={`/teams/${id}`}>
      <div className='card'>
        <div className='card-header'>
          <h4 className='card-header-title'>{name}</h4>
        </div>
        <div className='card-image image-custom'>
          <figure className='image card-custom'>
            <img src={crestUrl} alt={name} />
          </figure>
        
        </div>
      </div>
    </Link>
  </div>
)

export default TeamCard

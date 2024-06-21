import React from 'react'
import { Link } from 'react-router-dom';

const Lists = ({results}) => {
  return (
    <div className='lists-continer'>
      <ul className='lists'>
        {results.map(brewery => (
          <li key={brewery.id}>
            <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lists

import React from 'react'

const Overview = (props) => {
  return (
    <div className='overview-wrapper'>
      <h2>Your budget:</h2>
      <p>current budget: £{parseFloat(props.total).toFixed(2)}</p>
      <p>monthly budget: £{parseFloat(props.originalTotal).toFixed(2)}</p>
    </div>
  )
}

export default Overview

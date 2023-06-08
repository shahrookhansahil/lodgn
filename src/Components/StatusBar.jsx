import React from 'react'
import Request from './Request'
import OtherRequest from './OtherRequest'
function StatusBar() {
  return (
    <div id='Status'>
      <div id='items'>
      
      <h2 className='selected'> You Currently have 3 requests</h2>
      <Request/>
      <OtherRequest/>
      </div>
    </div>
  )
}

export default StatusBar
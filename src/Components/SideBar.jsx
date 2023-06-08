import React from 'react'
import Line from './Line'
function SideBar() {
  return (
    <div id='SideBar'>
    <h1>LODGN</h1>
    <h2 className='selected'>Current request</h2>
    <Line/>
    <h2>Ongoing stays</h2>
    <Line/>
    <h2>Prevoius stays</h2>
    <Line/>
    <h2>Reports</h2>
    <Line/>

    <button id='logout'><h3>Log-Out</h3></button>
    <h5>Help-Desk:</h5>
    <h5></h5>
    </div>

  )
}

export default SideBar
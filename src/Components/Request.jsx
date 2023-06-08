import React from 'react'
function Request() {
  return (
    <div id='request'>
       <span id='spa'>
        <div className='reqH'>
            <h2 id='cg'>St Judes Hospital</h2>
            <p>Sarasota,FL. 33178</p>
        </div>
        <span className='i'/>
        <div className='reqH'>
            <h2 id='cg'>10 &nbsp; &nbsp;- &nbsp; &nbsp;17</h2>
            <p>October &nbsp; &nbsp; December</p>
        </div>
        <span className='i'/>
        <div className='reqH'>
            <h2 id='cg'>20 Rooms</h2>
            <p>10 singles, &nbsp; 10 doubles</p>
        </div> 
         
        </span> 
        <span id='spa'>
             <div className='bt' id='btc'> <p>RECEIVED</p></div>
             <div className='bt'><p>NEGOTIATING</p> </div>
             <div className='bt' id='comp'> <p>COMPLETED</p></div>

        </span>
    
    </div>
  )
}

export default Request
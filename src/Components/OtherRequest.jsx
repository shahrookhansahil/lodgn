import React from 'react'
import Cart from './Cart'
function OtherRequest() {
  return (
    <div id='Orequest'>
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
        <div id='completed' className='bt'> <p>COMPLETED</p></div>    
        <span id='spa'>
        <Cart/>
        <Cart/>
        <Cart/>

        </span>
       
   
    </div>
  )
}

export default OtherRequest
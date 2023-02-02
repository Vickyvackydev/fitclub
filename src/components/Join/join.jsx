import React from 'react'
import './join.css'

const join = () => {
  return (
    <div className="Join" id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form className='email-container'>
                <input type="email" name='user-email' 
                placeholder='Enter Your Email address'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default join
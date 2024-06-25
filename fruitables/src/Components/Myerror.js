import React from 'react'
import './Myerror.css'
export default function Myerror() {
  return (
   <>
   
      <section class="header">
        <h1 class="headerh1">Error</h1>
        <p id="headerp"><a href="#">Home /</a><a href="#"> Pages /</a> 404</p>
      </section>
   
    
    <div className='errordiv'>
          <div className='error'>
              <i className="fa-solid fa-triangle-exclamation"></i>
              <h1 id='error'>404</h1>
              <h1 id='pnf'>Page Not Found</h1>
              <p id='errorp'>We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
              </p>

              <button>Go Back To Home</button>
          </div>
    </div>
   
    </>
  )
}

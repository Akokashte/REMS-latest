import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/notfound.css'

const NotFound = () => {
     useEffect(() => {
          window.scrollTo({ top: 0 })
     }, [])

     return (
          <div className='error-container'>
               <div className='section-error-image'>
                    <img className='error-image' src='notfound.svg' alt='err here' />
               </div>
               <h1 className='error-h1'>Error 404 - Page Not Found</h1>
               <p className='error-p'>The page you are looking for does not exist.</p>
               <NavLink to="/"><button className='go-back-btn'>Go Back</button></NavLink>
          </div>
     )
}

export default NotFound
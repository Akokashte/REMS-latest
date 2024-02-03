import React from 'react'
import '../styles/enquiryform.css'
const EnquiryForm = () => {
  return (
    <>
      <div id='enquiry-form'>
        <div id='enquiry-h1'>
          <h1>Enquiry Form</h1>
        </div>
        <div id='enquiry-h2'>
          <h2>For more information about the school, we request you to fill up the
            enquiry form and our team will reach out to you at the earliest.</h2>
        </div>
        <div id='main-form'>
          <div className='main-form-upper'>
            <div id='up-left'>
              <h2>Student's Name</h2>
              <input type="text" name="Student Name" className='form-content' />
            </div>
            <div id='up-right'>
              <h2>Standard</h2>
              <select name="Standard" className='form-content' >
                <option value="nursery">Nursury</option>
                <option value="nursery">Jr. Kg.</option>
                <option value="nursery">Sr. Kg.</option>
                <option value="nursery">First</option>
                <option value="nursery">Second</option>
                <option value="nursery">Third</option>
                <option value="nursery">Forth</option>
                <option value="nursery">Fifth</option>
                <option value="nursery">Sixth</option>
                <option value="nursery">Seventh</option>
                <option value="nursery">Eighth</option>
                <option value="nursery">Nineth</option>
                <option value="nursery">tenth</option>
                <option value="nursery">Eleventh</option>
              </select>
            </div>
          </div>
          <div className='main-form-lower'>
            <div id='down-left'>
              <h2>Mobile Number</h2>
              <input type="number" name="Mobile Number" className='form-content' />
            </div>
            <div id='down-right'>
              <h2>Email Address</h2>
              <input type="email" name="Email Address" className='form-content' />
            </div>
          </div>
          <div className='main-form-button'>
            <input type="button" value="Submit" id='form-button' />
          </div>
        </div>
      </div>
    </>
  )
}

export default EnquiryForm
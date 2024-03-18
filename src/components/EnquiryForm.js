import React, { useEffect } from 'react'
import '../styles/enquiryform.css'

const EnquiryForm = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

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
                <option value="juniorkg">Jr. Kg.</option>
                <option value="seniorkg">Sr. Kg.</option>
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Forth</option>
                <option value="5">Fifth</option>
                <option value="6">Sixth</option>
                <option value="7">Seventh</option>
                <option value="8">Eighth</option>
                <option value="9">Nineth</option>
                <option value="10">tenth</option>
                <option value="11">Eleventh</option>
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
          <div className='main-form-xtrem'>

            <div id='xtrem-down-left'>
              <h2>Any Questions?</h2>
              <input type="text" name="Description" className='desptn-content' />
            </div>
            <div id='xtrem-down-right'>
              <div id='otp-btns'>
                <input type="button" value="Get OTP" id='otp' />
                <input type="button" value="Verify OTP" id='otp' placeholder='sujeet' />
              </div>
              <input type="text" name="Enter OTP" className='xtrem-content' />
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
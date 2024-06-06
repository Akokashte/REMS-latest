import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/enquiryform.css'

const EnquiryForm = () => {
  // states for form data storage purpose
  const [enquiryFormData, setEnquiryFormData] = useState(
    {
      studentName: "",
      standard: "",
      mobileNumber: "",
      emailAddress: "",
      moreQueries: "",
      otp: ""
    }
  )

  // states for otp fields
  const [otpStatus, setOtpStatus] = useState(
    {
      isOtpSent: false,
      isOtpVerified: false
    }
  )

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  // storing data in state variables whenever we enter data into form input fields
  const onChangeOfInputFields = (event) => {
    setEnquiryFormData({ ...enquiryFormData, [event.target.name]: event.target.value })
  }

  // function for handling submit event
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { studentName, standard, mobileNumber, emailAddress, moreQueries } = enquiryFormData;
      let mobileRegex = /^[1-9][0-9]{9}$/      // Regular expression for 10-digit phone number
      let nameRegex = /^[a-zA-Z\s]+$/

      // frontend data validations here
      if (!studentName.trim() || studentName.length < 3) {
        alert("Please enter a valid name")
        return
      }
      else if (!nameRegex.test(studentName)) {
        alert('Student name must contain only letters and spaces');
        return;
      }
      else if(mobileNumber.charAt(0) === 0){
        alert("Invalid phone number !")
      }
      else if (!mobileRegex.test(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number');
        return
      }

      const enquirySubmittedResponse = await axios.post(
        "http://localhost:5000/api/v1/enquiry/register",
        { studentName, standard, mobileNumber, emailAddress, moreQueries }
      )

      if (enquirySubmittedResponse.data.success) {
        alert("Enquiry submitted successfully !")
        setEnquiryFormData({
          studentName: "",
          standard: "",
          mobileNumber: "",
          emailAddress: "",
          moreQueries: "",
          otp: ""
        })
        setOtpStatus({ isOtpSent: false, isOtpVerified: false })

      }
      else {
        alert("Invalid credentials")
      }
    } catch (error) {
      setOtpStatus({ isOtpSent: false, isOtpVerified: false })
      alert("something went wrong !")
    }
  }

  const sendOtpRequest = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(enquiryFormData.emailAddress)) {
        alert("email is mandatory plz enter a valid email !")
        return
      }

      const otpResponse = await axios.get(
        "http://localhost:5000/api/v1/enquiry/send/otp",
        {
          params: { email: enquiryFormData.emailAddress }
        }
      )
      // console.log("hi", otpResponse.data)
      if (otpResponse.data.data.isOtpSend) {
        setOtpStatus({ ...otpStatus, isOtpSent: true })
        // console.log(otpStatus)
        alert("otp sent successfully !")
      }
      else {
        alert("invalid email address !")
      }
    } catch (error) {
      alert("Error while sending otp !", error.status)
    }
  }

  const verifyOtp = async () => {
    try {
      const otpRegex = /^\d+$/

      if (!otpRegex.test(enquiryFormData.otp) || enquiryFormData.otp.length < 6 || enquiryFormData.otp.length > 6) {
        alert("Invalid otp")
        return
      }

      const verificationResponse = await axios.get(
        "http://localhost:5000/api/v1/enquiry/verify/otp",
        {
          params: {
            email: enquiryFormData.emailAddress,
            otp: enquiryFormData.otp
          }
        }
      )

      // console.log(verificationResponse)

      if (verificationResponse.data.success) {
        setOtpStatus({ ...otpStatus, isOtpSent: false, isOtpVerified: true })
        alert("Email verified successfully !")
      }
      else {
        alert("Wrong otp !")
        setEnquiryFormData({ ...enquiryFormData, otp: "" })
      }

    } catch (error) {
      // getting error status code sent from backend
      const errorStatusCode = error.response.status

      if (errorStatusCode === 410) {
        alert("Otp expired try again !")
      }
      else if (errorStatusCode === 401) {
        alert("Invalid otp !")
      }
      else if (errorStatusCode === 500) {
        alert("something went wrong again apply !", error)
      }
    }

  }

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
        <form id='main-form' onSubmit={handleSubmit} >
          <div className='main-form-upper'>
            <div id='up-left'>
              <h2>Student's Name</h2>
              <input type="text" name="studentName" onChange={onChangeOfInputFields} className='form-content' value={enquiryFormData.studentName} required autoComplete='false' />
            </div>
            <div id='up-right'>
              <h2>Standard</h2>
              <select name="standard" className='form-content' onChange={onChangeOfInputFields} value={enquiryFormData.standard} required autoComplete='false' >
                <option value="">Select Standard...</option>
                <option value="nursery">Nursery</option>
                <option value="juniorkg">Jr. Kg.</option>
                <option value="seniorkg">Sr. Kg.</option>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
                <option value="fourth">Fourth</option>
                <option value="fifth">Fifth</option>
                <option value="sixth">Sixth</option>
                <option value="seventh">Seventh</option>
                <option value="eighth">Eighth</option>
                <option value="nineth">Ninth</option>
                <option value="tenth">Tenth</option>
                <option value="eleven">Eleventh</option>
              </select>
            </div>
          </div>
          <div className='main-form-lower'>
            <div id='down-left'>
              <h2>Mobile Number</h2>
              <input type="number" name="mobileNumber" className='form-content' onChange={onChangeOfInputFields} value={enquiryFormData.mobileNumber} required autoComplete='false' />
            </div>
            <div id='down-right'>
              <h2>Email Address</h2>
              <input type="email" name="emailAddress" className='form-content' onChange={onChangeOfInputFields} value={enquiryFormData.emailAddress} required autoComplete='false' disabled={otpStatus.isOtpVerified?true:false} />
            </div>
          </div>
          <div className='main-form-xtrem'>

            <div id='xtrem-down-left'>
              <h2>Any Questions?</h2>
              <input type="text" name="moreQueries" className='desptn-content' onChange={onChangeOfInputFields} value={enquiryFormData.moreQueries} autoComplete='false' />
            </div>
            <div id='xtrem-down-right' className={otpStatus.isOtpSent ? '':'field_hidden'}>
              <div id='otp-btns'>
              {
                !otpStatus.isOtpVerified ? 
                <input type="button" name="getOtp" value="Get OTP" id='otp' onClick={sendOtpRequest} />
                :""
              }
                {
                  otpStatus.isOtpSent &&
                  <input type="button" name='verifyInputOtp' value="Verify OTP" id='otp' onClick={verifyOtp} />
                }
              </div>
              {
                otpStatus.isOtpSent &&
                <input type="number" name="otp" className= {otpStatus.isOtpSent ?'xtrem-content':'field_hidden'} onChange={onChangeOfInputFields} value={enquiryFormData.otp} required autoComplete='false' />
              }
            </div>
          </div>
          <div className={otpStatus.isOtpVerified ?'main-form-button' : 'field_hidden'}>
            {
              otpStatus.isOtpVerified &&
              <input type="submit" value="Submit" id='form-button' />
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default EnquiryForm
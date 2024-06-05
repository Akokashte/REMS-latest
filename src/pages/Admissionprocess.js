import React, { useEffect } from 'react'
import '../styles/admissionpro.css'
import EnquiryForm from '../components/EnquiryForm'
import Quicklinks from '../components/QuickLinks'
import HeadImageLine from '../components/HeadImageLine'
import MyAccordian from '../components/MyAccordian';
import { ageNormsAccordianData, listOfDocumentsAccordianData, ourAdmissionProcessAccordianData } from '../api/AdmissionProces.api'

const Admissionprocess = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <HeadImageLine headLine={"Admission Process"} featuredImage={"admissionfinal.png"} />
      {/* <div className="adpro2" >
        <input type="button" value="Admission Process" className="ad-btn" />
        <input type="button" value="Documents List" className="ad-btn" />
        <input type="button" value="Age Norms" className="ad-btn" />
        <input type="button" value="Enquiry Form" className="ad-btn" />
      </div> */}
      <div className='accordion'>
        <div className='accordion-inner'>
          <div className='acc-head'>
            <h1>Our Admission Process</h1>
          </div>
          <MyAccordian
            accordian_head={"Our Admission Process"}
            accordian_content={ourAdmissionProcessAccordianData}
          />
        </div>
      </div>
      <div className='adpro3'>
        <div id='things-to-remember'>
          <div id='ttr-head'>
            <h1>Things to Remember</h1>
          </div>
          <div id='ttr-body'>
            <h2>Admissions will be available on first come first served basis.Admissions will be available depending on vacancies available in each Standard.An incomplete form in any aspect will NOT be considered for processing.Registration does not Guarantee Admission.Admission will only be confirmed on receipt of the Administrative Fees and complete documentation.</h2>
          </div>
        </div>
        <MyAccordian
          accordian_head={"list of documents"}
          accordian_content={listOfDocumentsAccordianData}
        />
      </div>
      <div id='age-norms'>
        <div id='age-norms-head'>
          <h1>Age Norms for academic year 2024-25</h1>
        </div>
        <MyAccordian
          accordian_head={"age norms"}
          accordian_content={ageNormsAccordianData}
        />
      </div>
      <EnquiryForm />
      {/* <Quicklinks /> */}
    </>

  )
}

export default Admissionprocess
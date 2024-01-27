import React from 'react'
import '../styles/admissionpro.css'
import Collapsible from 'react-collapsible'
import EnquiryForm from '../components/EnquiryForm'
import Quicklinks from '../components/QuickLinks'
import Footer from '../components/Footer'
import HeadImageLine from '../components/HeadImageLine'

const Admissionprocess = () => {
  return (
    <>
    <HeadImageLine headLine = {"Admission Process"} featuredImage ={"admifinal.png"}/>
      <div className="adpro2" >
        <input type="button" value="Admission Process" className="ad-btn" />
        <input type="button" value="Documents List" className="ad-btn" />
        <input type="button" value="Age Norms" className="ad-btn" />
        <input type="button" value="Enquiry Form" className="ad-btn" />
      </div>
      <div className='accordion'>
        <div className='accordion-inner'>
          <div className='acc-head'>
            <h1>Our Admission Process</h1>
          </div>
          <div className='acc'>
            <Collapsible trigger="Visiting School" transitionTime={200}>
              <ul>
                <li><span>Step 1: </span> Parents will need to come to school to understand the culture and ethos of the Institution. Post this visit; parents need to collect the school brochure. The duly filled in admission form has to be submitted to school with all the relevant documents as given below within 7 days.</li>
                <li><span>Step 2: </span> School is conducting Entrance Exam on the base of last attended class.</li>
              </ul></Collapsible>
          </div>
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
        <div className='adpro3-accordion'>
          <div className='acc'>
            <Collapsible trigger="List Of Documents" transitionTime={200} >
              <ul>
                <li>
                  1. Original Transfer Certificate/ Bonafide certificate from the previous school (for students seeking admission from class 2 onwards). The school leaving certificate or transfer School UDISE Code & Students ID certificate should bear the recognition number of that school.
                </li>
                <li>
                  2.1 Passport Size Photographs- Student (Recent)
                </li>
                <li>
                  3. Photocopies of Report Cards of Previous 2 Years
                </li>
                <li>
                  4. Caste Certificate if applicable failing which the caste will be categorized as "General"
                </li>
                <li>
                  5. Aadhar Card Copies of the Student and Parents
                </li>
                <li>
                  6. Ration Card Xerox
                </li>
                <li>
                  7. Residence proof
                </li>
                <li>
                  8. For overseas students, must produce the Transfer certificate duly counter signed by the Indian Embassy
                </li>
                <li>
                  9. Medical form, which is a part of the Admission Form to be filled , signed and stamped by a registered medical practitioner
                </li>
                <li>
                  10. Photocopy of Legal documents, if applicable. E.g.- Change in name, Custody etc.
                </li>
                <li>
                  11. All the provided Xerox copies should be attested by authority person
                </li>
              </ul>
            </Collapsible>
          </div>
        </div>
      </div>
      <div id='age-norms'>
        <div id='age-norms-head'>
          <h1>Age Norms for academic year 2024-25</h1>
        </div>
        <div id='age-norms-acc'>
          <div className='acc'>
            <Collapsible trigger="Age Norms" transitionTime={200}>
              <ul>
                <li><span>NURSERY :</span> 3 years complete by 31st December 2024</li>
                <li><span>JUNIOR KG :</span> 4 years complete by 31st December 2024 </li>
                <li><span> SENIOR KG :</span> 5 years complete by 31st December 2024</li>
              </ul>
            </Collapsible>
          </div>
        </div>
      </div>
      <EnquiryForm />
      <Quicklinks />
    </>

  )
}

export default Admissionprocess
import React, { useEffect } from 'react'
import HeadImageLine from '../components/HeadImageLine'
import Collapsible from 'react-collapsible'
import '../styles/admissionpolicy.css'

const Admissionpolicy = () => {
    useEffect(()=>{
        window.scrollTo({ top: 0})
    },[])

    return (
        <>
            <div id='main-outer'>
                <HeadImageLine featuredImage={"rems.png"} headLine={"Admission Policies"} isAbout={true} />

                <div id='feerules'>
                    <h1>Fee Rules</h1>
                    <div className='actualrules'>
                        <ul>
                            <li>
                                <span>1. </span> Fees will be paid only by Cheque
                            </li>
                            <li>
                                <span>2. </span> A Late fee will be charge after the due date. If the fee is not paid within a maximum period of one month after the due date, the student's name will be struck off & he will have to seek readmission after paying admission fee again, along with the fine for the previous month
                            </li>
                            <li>
                                <span>3. </span> School fees are payable on a quarterly basis i.e. three months Together
                            </li>
                            <li>
                                <span>4. </span> Unless all dues are paid by the students, the results of the examinations / tests conducted by the school will not be communicated to the student. SCHOOL LEAVING CERTIFICATE will not be issued till all the outstanding dues from the student at the time of leaving the school are paid and a clearance certificate from the concerned authority is obtained.
                            </li>
                            <li>
                                <span>5. </span> Students who leave the school in the month prior to any vacation must pay the fees for the vacation
                            </li>
                            <li>
                                <span>6. </span> No deduction in fees will be allowed for vacations or for broken periods of the month. The full month's fee will be payable if the student's name appears on the roll on the 1st day of the month. Admission fee will not be refunded even if the student, for any reason, leaves the school immediately after securing admission
                            </li>
                        </ul>
                    </div>
                </div>
                <div id='admin-wit'>
                    <h1>Admissions and Withdrawls</h1>
                    <div className='actualrules'>
                        <ul>
                            <li>
                                <span>1. </span> The Admission fee, the Term fee and Tuition fee for three months must be paid in advance upon admission. These fees are not refundable should the child not eventually attend school
                            </li>
                            <li>
                                <span>2. </span> The Principal has the absolute right to admit/deny admission to or dismiss a child from the school. The decision of the Principal shall be final and binding on the parents
                            </li>
                            <li>
                                <span>3. </span> A child who has attended a private unrecognized school must produce an affidavit for the same and produce the school leaving certificate from the last school attended. He must also get a letter from the Department of Education. A child coming from an unrecognized school will have to appear for an admission test and qualify. The Principal's decision about the admission to the class fit for, will be final and binding.
                            </li>
                            <li>
                                <span>4. </span> A child coming from a recognized school will be admitted only when a school leaving certificate from the school, he/she has last attended, is produced. The school leaving certificate or transfer School UDISE Code & Students ID certificate should bear the recognition number of that school. In case of students coming from schools outside Maharashtra, the school leaving certificate must be countersigned by the Education Inspector of the area in that state from where he/she comes.
                            </li>
                            <li>
                                <span>5. </span> Notice of withdrawal in writing should be given one month in advance. Withdrawal forms may be detached from the school diary
                            </li>
                            <li>
                                <span>6. </span> Students who leave in April must pay the fees for April & May. Those who leave in November must pay the fees for December
                            </li>
                            <li>
                                <span>7. </span> No Leaving Certificate is issued until all sums due to the school are paid and all books etc. are returned to the Library
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='outer-FAQ'>

                    <div className='FAQ'>
                        <h1>FAQs</h1>
                        <div className='acc'>
                            <Collapsible trigger="1. How is ROTARY ENGLISH MEDIUM SCHOOL different from other international schools around?" transitionTime={100} >
                                <h3>Ans- Over the Past 12 years ROTARY ENGLISH MEDIUM SCHOOL has been known for its "Excellence in Education." Our focus is on delivering a high-quality teaching and learning, designing a broad and rich curriculum including diverse co- curricular opportunities and providing a supportive guidance programme.</h3>
                            </Collapsible>
                        </div>
                        <div className='acc'>
                            <Collapsible trigger="2. Is there a school uniform?" transitionTime={100} >
                                <h3>Ans- Yes, we have school uniforms for students from Grade 1 to Grade 12.</h3>
                            </Collapsible>
                        </div>
                        <div className='acc'>
                            <Collapsible trigger="3. Are your teachers working in the school well qualified?" transitionTime={100} >
                                <h3> "Ans- The teaching staff is highly qualified in their respective fields.</h3>
                            </Collapsible>
                        </div>
                        <div className='acc'>
                            <Collapsible trigger="4. What is the age criterion for admissions?" transitionTime={100} >
                                <h3>Ans- The REMS has an age policy which it follows diligently for all admission applications. While applying for Grade 1 the child must have completed 6 years by April.</h3>
                            </Collapsible>
                        </div>
                        <div className='acc'>
                            <Collapsible trigger="5. What is the teacher student ratio in the school?" transitionTime={100} >
                                <h3>Ans- In REMS, the teacher student ratio is 1:1.5</h3>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admissionpolicy

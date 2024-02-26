import React, { useEffect } from 'react'
import HeadImageLine from '../components/HeadImageLine'
import '../styles/admission_policy.css'
import { faqAccordianData } from '../api/FaqAccordianData.api'
import FaqAccordian from '../components/FaqAccordian'
import { feeActualrules, admissionWithdrawlsRules } from '../api/AdmisssionPolicyActualRules.api'
import RulesContainer from '../components/RulesContainer'

const Admissionpolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <>
            <div className='admission_policy_container'>
            <HeadImageLine featuredImage={"rems.png"} headLine={"Admission Policies"} isAbout={true} />
            <div className='inner_admission_policy_wrapper'>
                <RulesContainer
                    heading={"fee rules"}
                    arrayOfRulesToDisplay={feeActualrules}
                />
                <RulesContainer
                    heading={"Admissions and Withdrawls"}
                    arrayOfRulesToDisplay={admissionWithdrawlsRules}
                />
            </div>
                <div className='outerfaq'>
                    <div className='faq'>
                        <h1 className='faq_heading'>FAQs</h1>
                        {
                            faqAccordianData.map((curElem, index) => {
                                return (
                                    <FaqAccordian
                                        faq_accordian_question={curElem.question}
                                        faq_accordian_ans={curElem.content}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admissionpolicy

import React, { useEffect } from 'react'
import HeadImageLine from '../components/HeadImageLine'
import Faq from '../components/Faq'
import '../styles/admission_policy.css'
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
                <Faq />
            </div>
        </>
    )
}

export default Admissionpolicy

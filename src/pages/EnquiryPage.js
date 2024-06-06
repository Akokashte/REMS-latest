import React from "react";
import EnquiryForm from "../components/EnquiryForm";

const EnquiryPage =()=>{
    const mystyle ={
        padding:"2rem 0",
    }
    return(
        <>
            <div className="enquiry_page_container" style={mystyle}>
                <EnquiryForm />
            </div>
        </>
    )
}

export default EnquiryPage;
import React from "react";
import './SignUpPage.css';
import { SignUp } from "../../components/signup/SignUp";

const SignUpPage = () => {
    return (
        <React.Fragment>
            <div className="sign_up_page_content">
                <SignUp />
            </div>
        </React.Fragment>
    )
}

export default SignUpPage;
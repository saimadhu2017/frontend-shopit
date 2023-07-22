import React from "react";
import { SignIn } from "../../components/signin/SignIn";
import './LoginPage.css';

const LoginPage = () => {
    return (
        <React.Fragment>
            <div className="login_page_content">
                <SignIn />
            </div>
        </React.Fragment>
    )
}

export default LoginPage;
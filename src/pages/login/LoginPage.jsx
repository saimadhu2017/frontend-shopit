import React from "react";
import Header from "../../components/header/Header";
import SignIn from "../../components/signin/SignIn";
import './LoginPage.css';

const LoginPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="login_page_content">
                <SignIn />
            </div>
        </React.Fragment>
    )
}

export default LoginPage;
import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import './Root.css';

const Root = () => {
    return (
        <React.Fragment>
            <ToastContainer />
            <Header />
            <Outlet />
        </React.Fragment>
    )
}

export default Root;
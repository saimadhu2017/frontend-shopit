import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import './Root.css';
import { Provider } from 'react-redux'
import store from '../redux/store'

const Root = () => {
    return (
        <Provider store={store}>
            <ToastContainer />
            <Header />
            <Outlet />
        </Provider>
    )
}

export default Root;
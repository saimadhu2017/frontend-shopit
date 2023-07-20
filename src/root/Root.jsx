import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    )
}

export default Root;
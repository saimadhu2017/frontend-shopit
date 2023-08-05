import cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const ProtectedAnonymous = (props) => {
    const { Component } = props;
    const jwtSessionToken = cookies.get('jwtSessionToken');
    const userId = cookies.get('id')

    if (!userId || !jwtSessionToken) {
        return (<Component />)
    }

    return (<Navigate to={'/home'} />)
}
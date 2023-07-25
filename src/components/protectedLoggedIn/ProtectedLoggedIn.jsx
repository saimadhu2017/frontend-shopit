import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import cookies from "js-cookie";
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { validateUserApi } from '../../apis/user';
import { updateUserSignInAction } from '../../redux/session/sessionAction';

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUserSignInAction: (data) => { dispatch(updateUserSignInAction(data)) }
    })
}

const mapStateToProps = (state) => {
    return ({
        isUserSignedin: state.updateUserSignedIn.isUserSignedin
    })
}

export const ProtectedLoggedIn = connect(mapStateToProps, mapDispatchToProps)(
    (props) => {
        const { isUserSignedin, Component, updateUserSignInAction } = props;
        const jwtSessionToken = cookies.get('jwtSessionToken');
        const userId = cookies.get('id')
        const navigate = useNavigate();
        useEffect(() => {
            if (!isUserSignedin && jwtSessionToken && userId) {
                validateUserApi(userId, jwtSessionToken).then(
                    () => {
                        updateUserSignInAction({ isUserSignedin: true })
                        sessionStorage.setItem('sessionCreated', 'true')
                    }
                ).catch(
                    () => {
                        toast.error('Your Un-Authroised please sign In...', {
                            position: toast.POSITION.TOP_CENTER
                        })
                        cookies.remove('jwtSessionToken')
                        cookies.remove('id')
                        sessionStorage.clear()
                        navigate('/login')
                    }
                )
            }
            else if (!(jwtSessionToken && userId) && sessionStorage.getItem('sessionCreated') === 'true') {
                cookies.remove('jwtSessionToken')
                cookies.remove('id')
                sessionStorage.clear()
                toast.error('Session expired please sign in..', {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        })


        if (isUserSignedin && jwtSessionToken && userId) {
            return (<Component />)
        } else {
            if (jwtSessionToken && userId) {
                return (
                    <h1>Loading....</h1>
                )
            }
            return (<Navigate to={'/login'} />)
        }
    }
)
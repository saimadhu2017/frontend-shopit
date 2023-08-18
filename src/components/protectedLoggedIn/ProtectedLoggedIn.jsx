import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import cookies from "js-cookie";
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { validateUserApi } from '../../apis/user';
import { updateUserCartQuantityAction, updateUserSignInAction } from '../../redux/session/sessionAction';
import { loadApiAction } from '../../redux/loader/loaderAction';

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUserSignInAction: (data) => { dispatch(updateUserSignInAction(data)) },
        loadApiAction: (data) => { dispatch(loadApiAction(data)) },
        updateUserCartQuantityAction: (data) => { dispatch(updateUserCartQuantityAction(data)) }
    })
}

const mapStateToProps = (state) => {
    return ({
        isUserSignedin: state.updateUserSignedIn.isUserSignedin
    })
}

export const ProtectedLoggedIn = connect(mapStateToProps, mapDispatchToProps)(
    (props) => {
        const { isUserSignedin, Component, updateUserSignInAction, loadApiAction, updateUserCartQuantityAction } = props;
        const jwtSessionToken = cookies.get('jwtSessionToken');
        const userId = cookies.get('id')
        const navigate = useNavigate();
        useEffect(() => {
            if (!isUserSignedin && jwtSessionToken && userId) {
                loadApiAction({ showLoader: true, showTransparentPageLoad: false })
                validateUserApi(userId, jwtSessionToken).then(
                    (response) => {
                        const { userCartQuantity } = response?.data?.data || {}
                        updateUserSignInAction({ isUserSignedin: true })
                        updateUserCartQuantityAction({ cartQuantity: userCartQuantity || 0 })
                        sessionStorage.setItem('sessionCreated', 'true')
                    }
                ).catch(
                    () => {
                        updateUserSignInAction({ isUserSignedin: false })
                        updateUserCartQuantityAction({ cartQuantity: 0 })
                        toast.error('Your Un-Authroised please sign In...', {
                            position: toast.POSITION.TOP_CENTER
                        })
                        cookies.remove('jwtSessionToken')
                        cookies.remove('id')
                        sessionStorage.clear()
                        navigate('/login')
                    }
                ).finally(
                    () => {
                        loadApiAction({ showLoader: false, showTransparentPageLoad: true })
                    }
                )
            }
            else if (!(jwtSessionToken && userId) && sessionStorage.getItem('sessionCreated') === 'true') {
                updateUserSignInAction({ isUserSignedin: false })
                updateUserCartQuantityAction({ cartQuantity: 0 })
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
                return null
            }
            return (<Navigate to={'/login'} />)
        }
    }
)
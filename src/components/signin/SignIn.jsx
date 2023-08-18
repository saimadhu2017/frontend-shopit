import { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import './SignIn.css'
import { handleEmail } from '../signup/SignUp';
import { signInApi } from '../../apis/auth';
import { toast } from 'react-toastify';
import * as utils from './SignIn';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserCartQuantityAction, updateUserSignInAction } from '../../redux/session/sessionAction'
import cookies from "js-cookie";

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUserSignInAction: (data) => { dispatch(updateUserSignInAction(data)) },
        updateUserCartQuantityAction: (data) => { dispatch(updateUserCartQuantityAction(data)) }
    })
}

export const SignIn = connect(null, mapDispatchToProps)(
    (props) => {
        const [formData, setFormData] = useState({
            mail: {
                value: '',
                error: null,
                errorMessage: '* Please Enter Valid Email'
            },
            password: {
                value: '',
                error: null,
                errorMessage: '* Please Enter Valid Password'
            },
        })
        const [disableSubmitButton, setDisableSubmitButton] = useState(false);
        const isInitialMount = useRef(true);
        const navigate = useNavigate()

        useEffect(() => {
            if (isInitialMount.current) {
                isInitialMount.current = false
            }
            else {
                if (disableSubmitButton) {
                    utils.readyToSignInUser(formData, disableSubmitButton, setDisableSubmitButton, navigate, props)
                }
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [disableSubmitButton])
        return (
            <div className="signin">
                <div className="heading">Sign In</div>
                <p className='error_message'>{formData.mail.error}</p>
                <input
                    type="text"
                    className='inputBox'
                    placeholder='Email'
                    value={formData.mail.value}
                    onChange={(event) => { handleEmail(event, formData, setFormData) }}
                />
                <p className='error_message'>{formData.password.error}</p>
                <input
                    type="password"
                    className='inputBox'
                    placeholder='Password'
                    value={formData.password.value}
                    onChange={(event) => { setFormData({ ...formData, password: { ...formData.password, value: event.target.value, error: null } }) }}
                />
                <div className="signin_login_btn">
                    <Button
                        buttonName='Login'
                        classList={!disableSubmitButton ? 'login_btn btn' : 'login_btn_disable btn_disable'}
                        onClick={() => { !disableSubmitButton && onSubmit(formData, setFormData, disableSubmitButton, setDisableSubmitButton) }}
                    />
                </div>
            </div>
        )
    }
)

export const onSubmit = (formData, setFormData, disableSubmitButton, setDisableSubmitButton) => {
    for (const key in formData) {
        const { value, error, errorMessage } = formData[key]
        if (!value || error) {
            const updatedValue = { ...formData };
            updatedValue[key] = {
                value,
                error: updatedValue[key].errorMessage,
                errorMessage
            }
            setFormData(updatedValue)
            return;
        }
    }
    setDisableSubmitButton(!disableSubmitButton)
}

export const readyToSignInUser = (formData, disableSubmitButton, setDisableSubmitButton, navigate, props) => {
    const signInApiPromise = signInApi({ mail: formData.mail.value, password: formData.password.value });
    toast.promise(signInApiPromise, {
        pending: {
            render() {
                return ('Authenticating...')
            }
        },
        error: {
            render(err) {
                setDisableSubmitButton(!disableSubmitButton)
                return (err?.data?.response?.data?.err || 'Seems like server is down please try after some time')
            }
        },
        success: {
            render(response) {
                const { status, data } = response?.data?.data || {}
                const inOneMinute = new Date(new Date().getTime() + 500000);// nearly 8.33 minutes
                cookies.set('jwtSessionToken', data?.jwtToken, { expires: inOneMinute })
                cookies.set('id', data?.userId, { expires: inOneMinute })
                sessionStorage.setItem('sessionCreated', 'true')
                props.updateUserSignInAction({ isUserSignedin: true })
                props.updateUserCartQuantityAction({ cartQuantity: data?.userCartQuantity || 0 })
                setDisableSubmitButton(!disableSubmitButton)
                navigate('/home')
                return (status === 'success' ? 'Sign In Successfull' : 'We cannot Sign you in now please try later..')
            }
        }
    }, { position: toast.POSITION.TOP_CENTER })
}
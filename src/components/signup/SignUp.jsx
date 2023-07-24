import { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import './SignUp.css';
import * as utils from './SignUp';
import { signUpApi } from '../../apis/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const [formData, setFormData] = useState({
        first_name: {
            value: '',
            error: null,
            errorMessage: '* Please Enter Valid First Name'
        },
        last_name: {
            value: '',
            error: null,
            errorMessage: '* Please Enter Valid Last Name'
        },
        mail: {
            value: '',
            error: null,
            errorMessage: '* Please Enter Valid Email'
        },
        phone: {
            value: '',
            error: null,
            errorMessage: '* Please Enter Valid Phone Number'
        },
        country: {
            value: null,
            error: null,
            errorMessage: '* Please Select Your Country'
        },
        password: {
            value: '',
            error: null,
            errorMessage: '* Please Enter Strong Password'
        },
        re_enter_password: {
            value: '',
            error: null,
            errorMessage: 'Your Password Did Not Match Re-enter password again'
        },
        istermsAndCondSelected: {
            value: false,
            error: null,
            errorMessage: '* Please Accept Our Terms And Conditions'
        }
    })
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
    const isInitialMount = useRef(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
        }
        else {
            if (disableSubmitButton) {
                const bodyData = {
                    first_name: formData.first_name.value,
                    last_name: formData.last_name.value,
                    mail: formData.mail.value,
                    phone: formData.phone.value,
                    country: formData.country.value,
                    password: formData.password.value
                }
                utils.readyToCreatUser(bodyData, disableSubmitButton, setDisableSubmitButton, navigate)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disableSubmitButton])
    return (
        <div className="signup">
            <div className="heading">Sign Up</div>
            <p className='error_message'>{formData.first_name.error}</p>
            <input
                type="text"
                className='inputBox'
                placeholder='First Name'
                value={formData.first_name.value}
                onChange={(event) => { utils.handleFirstName(event, formData, setFormData) }}
            />
            <p className='error_message'>{formData.last_name.error}</p>
            <input
                type="text"
                className='inputBox'
                placeholder='Last Name'
                value={formData.last_name.value}
                onChange={(event) => { utils.handleLastName(event, formData, setFormData) }}
            />
            <p className='error_message'>{formData.mail.error}</p>
            <input
                type="text"
                className='inputBox'
                placeholder='Email'
                value={formData.mail.value}
                onChange={(event) => { utils.handleEmail(event, formData, setFormData) }}
            />
            <p className='error_message'>{formData.phone.error}</p>
            <input
                type="number"
                className='inputBox'
                placeholder='Phone'
                value={formData.phone.value}
                onChange={(event) => { utils.handlePhone(event, formData, setFormData) }}
            />
            <p className='error_message'>{formData.country.error}</p>
            <select placeholder='Country' className='inputBox' defaultValue={'NA'} onChange={(event) => {
                setFormData({
                    ...formData,
                    country: {
                        value: event.target.value,
                        error: null,
                        errorMessage: formData.country.errorMessage
                    }
                })
            }}>
                <option value={'NA'} disabled hidden>Select Your Country</option>
                <option value="in" className='inputBox'>IN</option>
                <option value="pak" className='inputBox'>PAK</option>
                <option value="uk" className='inputBox'>UK</option>
                <option value="us" className='inputBox'>US</option>
            </select>
            <p className='error_message'>{formData.password.error}</p>
            <input
                type="text"
                className='inputBox'
                placeholder='Password'
                value={formData.password.value}
                onChange={(event) => { utils.handlePassword(event, formData, setFormData) }}
            />
            <p className='error_message'>{formData.re_enter_password.error}</p>
            <input
                type="password"
                className='inputBox'
                placeholder='Re-Enter Password'
                value={formData.re_enter_password.value}
                onChange={(event) => { utils.handleReEnterPassword(event, formData, setFormData) }}
            />
            <p className='error_message'>{formData.istermsAndCondSelected.error}</p>
            <div className='terms_condition'>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="chk_box_id"
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                istermsAndCondSelected: {
                                    value: !formData.istermsAndCondSelected.value,
                                    error: null,
                                    errorMessage: formData.istermsAndCondSelected.errorMessage
                                }
                            })
                        }}
                    />
                </div>
                <label htmlFor="chk_box_id" className='terms_condition_label'>By selecting "Sign up" I agree to the Shopit Terms. Learn about how we use and protect your data in our Privacy Policy.</label>
            </div>
            <div className="signup_submit_btn">
                <Button
                    buttonName='Sign Up'
                    classList={!disableSubmitButton ? 'signup_btn btn' : 'signup_btn_disable btn_disable'}
                    onClick={() => { !disableSubmitButton && utils.onSubmit(formData, setFormData, disableSubmitButton, setDisableSubmitButton) }}
                />
            </div>
        </div>
    )
}

export const handleFirstName = (event, formData, setFormData) => {
    let error = null;
    const { value } = event.target;
    if (!(/^[a-zA-Z ]*$/.test(value)) || !value || value[value.length - 1] === ' ' || value[0] === ' ') {
        error = formData.first_name.errorMessage
    }
    setFormData({
        ...formData,
        first_name: {
            value,
            error,
            errorMessage: formData.first_name.errorMessage
        }
    })
}

export const handleLastName = (event, formData, setFormData) => {
    let error = null;
    const { value } = event.target;
    if (!(/^[a-zA-Z ]*$/.test(value)) || !value || value[value.length - 1] === ' ' || value[0] === ' ') {
        error = formData.last_name.errorMessage
    }
    setFormData({
        ...formData,
        last_name: {
            value,
            error,
            errorMessage: formData.last_name.errorMessage
        }
    })
}

export const handleEmail = (event, formData, setFormData) => {
    let error = null;
    const { value } = event.target;
    if (!(/\w+([.-_]\w+)*@\w+([.-_]\w+)*\.\w{2,4}/.test(value)) || !value || value[value.length - 1] === ' ' || value[0] === ' ') {
        error = formData.mail.errorMessage
    }
    setFormData({
        ...formData,
        mail: {
            value,
            error,
            errorMessage: formData.mail.errorMessage
        }
    })
}

export const handlePhone = (event, formData, setFormData) => {
    let error = null;
    const { value } = event.target;
    if (!(/^\d{10}$/.test(value))) {
        error = formData.phone.errorMessage
    }
    setFormData({
        ...formData,
        phone: {
            value,
            error,
            errorMessage: formData.phone.errorMessage
        }
    })
}

export const handlePassword = (event, formData, setFormData) => {
    let error = null;
    const { value } = event.target;
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value))) {
        error = formData.password.errorMessage
    }
    setFormData({
        ...formData,
        password: {
            value,
            error,
            errorMessage: formData.password.errorMessage
        }
    })
}

export const handleReEnterPassword = (event, formData, setFormData) => {
    let error = null;
    const { value } = event.target;
    if (formData.password.value !== value) {
        error = formData.re_enter_password.errorMessage
    }
    setFormData({
        ...formData,
        re_enter_password: {
            value,
            error,
            errorMessage: formData.re_enter_password.errorMessage
        }
    })
}

export const onSubmit = (formData, setFormData, disableSubmitButton, setDisableSubmitButton) => {
    if (!formData.country.value) {
        setFormData({
            ...formData,
            country: {
                value: null,
                error: formData.country.errorMessage,
                errorMessage: formData.country.errorMessage
            }
        })
        return;
    }
    if (formData.password.value !== formData.re_enter_password.value) {
        setFormData({
            ...formData,
            re_enter_password: {
                value: '',
                error: formData.re_enter_password.errorMessage,
                errorMessage: formData.re_enter_password.errorMessage
            }
        })
        return;
    }
    if (!formData.istermsAndCondSelected.value) {
        setFormData({
            ...formData,
            istermsAndCondSelected: {
                value: false,
                error: formData.istermsAndCondSelected.errorMessage,
                errorMessage: formData.istermsAndCondSelected.errorMessage
            }
        })
        return;
    }
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
    setDisableSubmitButton(!disableSubmitButton);

}

export const readyToCreatUser = (bodyData, disableSubmitButton, setDisableSubmitButton, navigate) => {
    const signUpApiPromise = signUpApi(bodyData);
    toast.promise(signUpApiPromise, {
        pending: {
            render() {
                return ('Creating Your Account Please wait...')
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
                setDisableSubmitButton(!disableSubmitButton)
                navigate('/login')
                return (response?.data?.data?.status === 'success' ? 'Your Account got created' : 'We cannot create your account some problem happened')
            }
        }
    }, { position: toast.POSITION.TOP_CENTER })
}
import { useState } from 'react';
import Button from '../button/Button';
import './SignIn.css'
import { handleEmail } from '../signup/SignUp';

export const SignIn = () => {
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
                <Button buttonName='Login' classList='login_btn btn' onClick={() => { onSubmit(formData, setFormData) }} />
            </div>
        </div>
    )
}

export const onSubmit = (formData, setFormData) => {
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
    console.log(formData);
    //TODO: Call the SIGNIN API to SignIn the user and also you need to disable the button or whole UI screen to tell the User to wait 
}
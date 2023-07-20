import Button from '../button/Button';
import './SignIn.css'

const SignIn = () => {
    return (
        <div className="signin">
            <div className="heading">Sign In</div>
            <input type="text" className='inputBox' placeholder='Email' />
            <input type="password" className='inputBox' placeholder='Password' />
            <div className="signin_login_btn">
                <Button buttonName='Login' classList='login_btn btn' />
            </div>
        </div>
    )
}

export default SignIn;
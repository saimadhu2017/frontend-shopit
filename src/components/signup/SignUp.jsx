import Button from '../button/Button';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="signup">
            <div className="heading">Sign Up</div>
            <input type="text" className='inputBox' placeholder='First Name' />
            <input type="text" className='inputBox' placeholder='Last Name' />
            <input type="text" className='inputBox' placeholder='Email' />
            <input type="number" className='inputBox' placeholder='Phone' />
            <select placeholder='Country' className='inputBox'>
                <option value="none" selected disabled hidden>Select Your Country</option>
                <option value="" className='inputBox'>IN</option>
                <option value="" className='inputBox'>PAK</option>
                <option value="" className='inputBox'>UK</option>
                <option value="" className='inputBox'>US</option>
            </select>
            <input type="password" className='inputBox' placeholder='Password' />
            <input type="password" className='inputBox' placeholder='Re-Enter Password' />
            <div className='terms_condition'>
                <div className="checkbox"><input type="checkbox" id="chk_box_id" /></div>
                <label for="chk_box_id" className='terms_condition_label'>By selecting "Sign up" I agree to the Shopit Terms. Learn about how we use and protect your data in our Privacy Policy.</label>
            </div>
            <div className="signup_submit_btn">
                <Button buttonName='Sign Up' classList='signup_btn btn' />
            </div>
        </div>
    )
}

export default SignUp;
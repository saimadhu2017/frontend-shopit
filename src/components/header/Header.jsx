import './Header.css'
import svg from '../../assets/Logo.svg'
import Button from '../button/Button';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Button buttonName={<img src={svg} alt="Your SVG" />} navigatePath='/' isNavigationType={true} />
            </div>
            <div className="nav_items">
                <div className="item1">
                    <Button buttonName='Sign Up' classList='signup_btn btn' navigatePath='/signup' isNavigationType={true} />
                </div>
                <Button buttonName='Login' classList='login_btn btn' navigatePath='/login' isNavigationType={true} />
            </div>
        </div>
    )
}

export default Header;
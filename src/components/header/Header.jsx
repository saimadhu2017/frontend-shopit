import './Header.css'
import svg from '../../assets/Logo.svg'
import Button from '../button/Button';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <a href="#"><img src={svg} alt="Your SVG" /></a>
            </div>
            <div className="nav_items">
                <div className="item1">
                    <Button buttonName='Sign Up' classList='signup_btn btn' />
                </div>
                <Button buttonName='Login' classList='login_btn btn' />
            </div>
        </div>
    )
}

export default Header;
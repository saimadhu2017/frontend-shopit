import './Header.css'
import svg from '../../assets/Logo.svg'
import Button from '../button/Button';
import ProfileSvg from '../../assets/icons/profileSvg/ProfileSvg';
import HomeSvg from '../../assets/icons/homeSvg/HomeSvg';
import BagSvg from '../../assets/icons/bagSvg/BagSvg';
import LogoutSvg from '../../assets/icons/logoutSvg/LogoutSvg';
import { connect } from 'react-redux';
import { updateUserSignInAction } from '../../redux/session/sessionAction';
import { useNavigate } from 'react-router-dom';
import cookies from "js-cookie";
import { toast } from 'react-toastify';

const mapStateToProps = (state) => {
    return ({
        isUserSignedin: state.updateUserSignedIn.isUserSignedin
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUserSignInAction: (data) => { dispatch(updateUserSignInAction(data)) }
    })
}


const Header = connect(mapStateToProps, mapDispatchToProps)(
    (props) => {
        const { isUserSignedin, updateUserSignInAction } = props
        const navigate = useNavigate();
        return (
            <div className="header">
                <div className="logo">
                    <Button buttonName={<img src={svg} alt="Your SVG" />} navigatePath='/' isNavigationType={true} />
                </div>
                {
                    !isUserSignedin && <div className="nav_items">
                        <div className="item1">
                            <Button buttonName='Sign Up' classList='signup_btn btn' navigatePath='/signup' isNavigationType={true} />
                        </div>
                        <Button buttonName='Login' classList='login_btn btn' navigatePath='/login' isNavigationType={true} />
                    </div>
                }
                {
                    isUserSignedin && <div className='loggedin_nav_items'>
                        <Button buttonName={<HomeSvg />} classList='loggedin_item' navigatePath='/home' isNavigationType={true} />
                        <Button buttonName={<BagSvg />} classList='loggedin_item' navigatePath='/bag' isNavigationType={true} />
                        <Button buttonName={<ProfileSvg />} classList='loggedin_item' navigatePath='/profile' isNavigationType={true} />
                        <Button buttonName={<LogoutSvg />} classList='btn_remove_default_properties' isNavigationType={false} onClick={() => { logout({ updateUserSignInAction, navigate }) }} />
                    </div>
                }
            </div>
        )
    }

)

const logout = (methods) => {
    const { updateUserSignInAction, navigate } = methods;
    updateUserSignInAction({ isUserSignedin: false })
    cookies.remove('jwtSessionToken')
    cookies.remove('id')
    sessionStorage.clear()
    toast.success('Successfully logged out', {
        position: toast.POSITION.TOP_CENTER
    })
    navigate('/login')
}

export default Header;
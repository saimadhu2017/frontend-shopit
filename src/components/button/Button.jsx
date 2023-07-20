import { Link } from 'react-router-dom';
import './Button.css'

const Button = (props) => {
    const {
        buttonName,
        classList,
        navigatePath,
        isNavigationType
    } = props;

    if (isNavigationType) {
        return (
            <Link className={classList} to={navigatePath}>{buttonName}</Link>
        )
    }
    else {
        return (
            <a href="" className={classList}>{buttonName}</a>
        )
    }
}

export default Button;
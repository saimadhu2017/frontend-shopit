import { Link } from 'react-router-dom';
import './Button.css'

const Button = (props) => {
    const {
        buttonName,
        classList,
        navigatePath,
        isNavigationType,
        onClick
    } = props;

    if (isNavigationType) {
        return (
            <Link className={classList} to={navigatePath}>{buttonName}</Link>
        )
    }
    else {
        return (
            <button className={classList} onClick={onClick}>{buttonName}</button>
        )
    }
}

export default Button;
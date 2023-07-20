import './Button.css'

const Button = (props) => {
    const {
        buttonName,
        classList
    } = props;

    return (
        <a href="" className={classList}>{buttonName}</a>
    )
}

export default Button;
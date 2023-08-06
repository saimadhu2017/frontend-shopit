import './ProductAction.css'
import Button from '../button/Button';


export const ProductAction = (props) => {
    const {
        actionType
    } = props
    if (actionType === 'add') {

        return (
            <Button
                buttonName='Add To Bag'
                classList={'btn add_to_bag_btn drop_shadow'}
            // onClick={() => { !disableSubmitButton && onSubmit(formData, setFormData, disableSubmitButton, setDisableSubmitButton) }}
            />
        )
    }
    if (actionType === 'update') {
        return null
    }
    if (actionType === 'ooo') {
        return (
            <ul>
                <li className="product_ooo">
                    <span className='product_ooo_text'>This product is out of stock</span>
                </li>
            </ul>
        )
    }
}
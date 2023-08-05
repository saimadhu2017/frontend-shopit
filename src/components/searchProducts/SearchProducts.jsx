import Button from '../button/Button';
import './SearchProducts.css';

export const SearchProducts = (props) => {
    return (
        <div className='search_products'>
            <input
                type='text'
                className='inputBox_search drop_shadow'
                placeholder='Search any product you want to find'
            // value={formData.mail.value}
            // onChange={(event) => { handleEmail(event, formData, setFormData) }}
            />
            <div className="search_input_btn_div drop_shadow">
                <Button
                    buttonName='Search'
                    classList={!false ? 'btn search_product_btn' : 'btn_disable search_product_btn_disable'}
                // onClick={() => { !disableSubmitButton && onSubmit(formData, setFormData, disableSubmitButton, setDisableSubmitButton) }}
                />
            </div>
        </div>
    )
}
import { useState } from 'react';
import Button from '../button/Button';
import './SearchProducts.css';
import * as utils from './SearchProducts';
import { toast } from 'react-toastify';
import { productSearchByName } from '../../apis/products';
import cookies from "js-cookie";
import { connect } from 'react-redux';
import { loadApiAction } from '../../redux/loader/loaderAction';

const mapDispatchToProps = (dispatch) => {
    return ({
        loadApiAction: (data) => { dispatch(loadApiAction(data)) }
    })
}

export const SearchProducts = connect(null, mapDispatchToProps)(
    (props) => {
        const { loadApiAction, setListOfProducts } = props;
        const [searchValue, setSearchValue] = useState('')
        return (
            <div className='search_products'>
                <input
                    type='text'
                    className='inputBox_search drop_shadow'
                    placeholder='Search any product you want to find'
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
                <div className="search_input_btn_div drop_shadow">
                    <Button
                        buttonName='Search'
                        classList={!false ? 'btn search_product_btn' : 'btn_disable search_product_btn_disable'}
                        onClick={() => { !false && utils.onSubmit({ searchValue }, { loadApiAction, setListOfProducts }) }}
                    />
                </div>
            </div>
        )
    }
)

export const onSubmit = (data, methods) => {
    const { searchValue } = data;
    const { loadApiAction, setListOfProducts } = methods;
    if (searchValue === '') {
        toast.error('Search field is required', {
            position: toast.POSITION.TOP_CENTER
        })
        return
    }
    loadApiAction({ showLoader: true })
    const jwtSessionToken = cookies.get('jwtSessionToken');
    const userId = cookies.get('id')
    const searchProductApiPromise = productSearchByName(userId, jwtSessionToken, searchValue);
    searchProductApiPromise.then(
        (response) => {
            setListOfProducts(response?.data?.data)
        }
    ).catch(
        (err) => {
            toast.error(err?.response?.data?.err || 'Seems like server is down please try after some time', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    ).finally(
        () => {
            loadApiAction({ showLoader: false })
        }
    )
}
import './ProductAction.css'
import Button from '../button/Button';
import * as utils from './ProductAction';
import { connect } from 'react-redux';
import { loadApiAction } from '../../redux/loader/loaderAction';
import { updateUserCartQuantityAction } from '../../redux/session/sessionAction';
import { updateUserCartQuantityApi } from '../../apis/user';
import cookies from "js-cookie";
import { toast } from 'react-toastify';

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUserCartQuantityAction: (data) => { dispatch(updateUserCartQuantityAction(data)) },
        loadApiAction: (data) => { dispatch(loadApiAction(data)) }
    })
}

const mapStateToProps = (state) => {
    return ({
        totalCartQuantity: state.updateUserSignedIn.cartQuantity
    })
}

export const ProductAction = connect(mapStateToProps, mapDispatchToProps)(
    (props) => {
        const {
            actionType,
            quantity_in_cart,
            updateUserCartQuantityAction,
            loadApiAction,
            product_id,
            totalCartQuantity,
            setListOfProducts,
            index,
            listOfProducts
        } = props
        if (actionType === 'add') {

            return (
                <Button
                    buttonName='Add To Bag'
                    classList={'btn add_to_bag_btn drop_shadow'}
                    onClick={() => { utils.updateQuantityInBag(1, { quantity_in_cart, product_id, totalCartQuantity, index, listOfProducts }, { updateUserCartQuantityAction, loadApiAction, setListOfProducts }) }}
                />
            )
        }
        if (actionType === 'update') {
            return (
                <div className="product_update">
                    <Button
                        buttonName='-'
                        classList={'btn btn_update_product_quantity'}
                    />
                    <div className="product_quantity_value">
                        {quantity_in_cart}
                    </div>
                    <Button
                        buttonName='+'
                        classList={'btn btn_update_product_quantity'}
                    />
                </div>
            )
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
)

export const updateQuantityInBag = (type, data, methods) => {
    const { quantity_in_cart, product_id, totalCartQuantity, index, listOfProducts } = data;
    const { updateUserCartQuantityAction, loadApiAction, setListOfProducts } = methods;

    let quantity = type ? quantity_in_cart + 1 : quantity_in_cart - 1;
    let cartQuantity = type ? totalCartQuantity + 1 : totalCartQuantity - 1;
    const jwtSessionToken = cookies.get('jwtSessionToken');
    const userId = cookies.get('id')

    loadApiAction({ showLoader: true, showTransparentPageLoad: true })

    const updateUserCartQuantityPromise = updateUserCartQuantityApi(userId, jwtSessionToken, { quantity, product_id });
    updateUserCartQuantityPromise.then(
        () => {
            const updatedListOfProducts = [...listOfProducts]
            updatedListOfProducts[index] = {
                ...updatedListOfProducts[index],
                quantity_in_cart: quantity
            }
            setListOfProducts(updatedListOfProducts)
            updateUserCartQuantityAction({ cartQuantity })
        }
    ).catch(
        (err) => {
            toast.error(err?.response?.data?.err || 'Seems like server is down please try after some time', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    ).finally(
        () => {
            loadApiAction({ showLoader: false, showTransparentPageLoad: true })
        }
    )
}
import Button from '../button/Button'
import { ProductAction } from '../productAction/ProductAction'
import './ProductCard.css';

export const ProductCard = (props) => {
    const {
        product_name,
        brand_name,
        final_price,
        in_store,
        quantity_in_cart,
        striked_price,
        product_id,
        setListOfProducts,
        index,
        listOfProducts
    } = props
    return (
        <div className='product_card'>
            <div className="product_title">{product_name}</div>
            <div className="product_brand">{brand_name}</div>
            <img
                src={require('../../assets/product_image.jpg')}
                alt='product_image'
                className='product_image'
            />
            {
                !!in_store && <div className="product_price">
                    <span className='product_currency'>
                        {'₹ '}
                    </span>
                    {final_price}
                    <div className='striked_price'>{striked_price}</div>
                </div>
            }
            <div className="product_card_action">
                {
                    !in_store ? <ProductAction actionType={'ooo'} /> : (<ProductAction
                        actionType={!quantity_in_cart ? 'add' : 'update'}
                        quantity_in_cart={quantity_in_cart}
                        product_id={product_id}
                        setListOfProducts={setListOfProducts}
                        index={index}
                        listOfProducts={listOfProducts} />)
                }
            </div>
            <Button
                isNavigationType={true}
                classList={'product_more'}
                buttonName={'More'}
                navigatePath={null}//TODO:
            />
        </div>
    )
}
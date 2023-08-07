import Button from '../button/Button'
import { ProductAction } from '../productAction/ProductAction'
import './ProductCard.css'
import { sampleProduct } from './__test_data/data'

export const ProductCard = (props) => {
    const {
        product_name,
        brand_name,
        final_price,
        in_store,
        quantity_in_cart
    } = sampleProduct
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
                </div>
            }
            <div className="product_card_action">
                {
                    !in_store ? <ProductAction actionType={'ooo'} /> : (!quantity_in_cart ? <ProductAction actionType={'add'} /> : <ProductAction actionType={'update'} quantity_in_cart={quantity_in_cart} />)
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
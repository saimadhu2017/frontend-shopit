import { ProductCard } from '../productCard/ProductCard'
import './ProductListingResults.css'

export const ProductListingResults = (props) => {
    const { listOfProducts } = props
    if (listOfProducts && listOfProducts.length > 0) {
        return (
            <div className="plr">
                {
                    listOfProducts.map((product) => {
                        const { product_name, brand_name, final_price, in_store, quantity_in_cart, product_id, striked_price } = product
                        return (
                            <div key={product_id} className='plr_product_card'>
                                <ProductCard
                                    product_name={product_name}
                                    brand_name={brand_name}
                                    final_price={final_price}
                                    in_store={in_store}
                                    quantity_in_cart={quantity_in_cart}
                                    striked_price={striked_price}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div>Search some product to display here</div>
        )
    }
}
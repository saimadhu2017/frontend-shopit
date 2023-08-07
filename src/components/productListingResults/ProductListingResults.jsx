import { ProductCard } from '../productCard/ProductCard'
import './ProductListingResults.css'
import { sampleListOfProducts } from './__test_data/data'

export const ProductListingResults = () => {
    return (
        <div className="plr">
            {
                sampleListOfProducts.map((product) => {
                    const { product_name, brand_name, final_price, in_store, quantity_in_cart, product_id } = product
                    return (
                        <div key={product_id} className='plr_product_card'>
                            <ProductCard
                                product_name={product_name}
                                brand_name={brand_name}
                                final_price={final_price}
                                in_store={in_store}
                                quantity_in_cart={quantity_in_cart}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
import { ProductCard } from '../productCard/ProductCard'
import './ProductListingResults.css'

export const ProductListingResults = (props) => {
    const { listOfProducts, setListOfProducts } = props
    if (listOfProducts && listOfProducts.length > 0) {
        return (
            <div className="plr">
                {
                    listOfProducts.map((product, index) => {
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
                                    product_id={product_id}
                                    setListOfProducts={setListOfProducts}
                                    index={index}
                                    listOfProducts={listOfProducts}
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
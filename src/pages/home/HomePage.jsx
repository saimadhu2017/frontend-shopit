import React from "react";
import { SearchProducts } from "../../components/searchProducts/SearchProducts";
import { ProductListingResults } from "../../components/productListingResults/ProductListingResults";
import './HomePage.css'

const HomePage = () => {
    return (
        <React.Fragment>
            <div className="home_page_search_products">
                <SearchProducts />
            </div>
            <ProductListingResults />
        </React.Fragment>
    )
}

export default HomePage;
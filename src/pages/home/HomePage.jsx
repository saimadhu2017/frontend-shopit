import React, { useState } from "react";
import { SearchProducts } from "../../components/searchProducts/SearchProducts";
import { ProductListingResults } from "../../components/productListingResults/ProductListingResults";
import './HomePage.css'

const HomePage = () => {
    const [listOfProducts, setListOfProducts] = useState([])
    return (
        <React.Fragment>
            <div className="home_page_search_products">
                <SearchProducts setListOfProducts={setListOfProducts} />
            </div>
            <ProductListingResults listOfProducts={listOfProducts} />
        </React.Fragment>
    )
}

export default HomePage;
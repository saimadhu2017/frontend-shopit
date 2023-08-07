import React from "react";
import { SearchProducts } from "../../components/searchProducts/SearchProducts";
import { ProductListingResults } from "../../components/productListingResults/ProductListingResults";

const HomePage = () => {
    return (
        <React.Fragment>
            <SearchProducts />
            <ProductListingResults />
        </React.Fragment>
    )
}

export default HomePage;
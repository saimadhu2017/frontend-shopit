import React from "react";
import { SearchProducts } from "../../components/searchProducts/SearchProducts";
import { ProductCard } from "../../components/productCard/ProductCard";

const HomePage = () => {
    return (
        <React.Fragment>
            <SearchProducts />
            <ProductCard />
        </React.Fragment>
    )
}

export default HomePage;
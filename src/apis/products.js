import axios from 'axios';

export const productSearchByName = (userid, token, searchProductName) => {
    return axios.get(`http://localhost:5000/products/product-search/${userid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            name: searchProductName
        }
    })
}
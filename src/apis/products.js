import axios from 'axios';

export const productSearchByName = (userid, token, searchProductName) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/products/product-search/${userid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            name: searchProductName
        }
    })
}
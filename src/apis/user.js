import axios from 'axios';

export const validateUserApi = (userid, token) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/user/validate/${userid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateUserCartQuantityApi = (userid, token, data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}/user/add-item-cart/${userid}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
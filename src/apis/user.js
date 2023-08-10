import axios from 'axios';

export const validateUserApi = (userid, token) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/user/validate/${userid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
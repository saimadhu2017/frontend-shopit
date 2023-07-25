import axios from 'axios';

export const validateUserApi = (userid, token) => {
    return axios.get(`http://localhost:5000/user/validate/${userid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
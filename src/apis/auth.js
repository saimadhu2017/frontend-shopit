import axios from 'axios';

export const signUpApi = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/signup`, data)
}

export const signInApi = ({ mail, password }) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/auth/signin`, {
        params: {
            mail,
            password
        }
    })
}
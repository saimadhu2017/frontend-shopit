import axios from 'axios';

export const signUpApi = (data) => {
    return axios.post('http://localhost:5000/auth/signup', data)
}

export const signInApi = ({ mail, password }) => {
    return axios.get('http://localhost:5000/auth/signin', {
        params: {
            mail,
            password
        }
    })
}
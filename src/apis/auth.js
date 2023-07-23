import axios from 'axios';

export const signUpApi = (data) => {
    return axios.post('http://localhost:5000/auth/signup', data)
}
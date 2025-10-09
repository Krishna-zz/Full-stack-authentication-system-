import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:3000'})

API.interceptors.request.use((req) => {

    const token = localStorage.getItem('token')

    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }

    return req
})


export const registerUser = (data) => API.post('/user/register', data) 
export const loginUser = (data) => API.post('/user/login', data)



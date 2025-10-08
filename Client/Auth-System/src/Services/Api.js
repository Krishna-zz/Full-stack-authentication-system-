import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:3000'})




export const registerUser = (data) => API.post('/user/register', data) 
export const loginUser = (data) => API.post('/user/login', data)



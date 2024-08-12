import { API } from '../utils/config';
import axios from 'axios';

export const createCategory = async (token, data) => {
    return await axios.post(`${API}/category`, data, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    });
}

// api function for creating product 

export const createProduct = (token, data) => {
    return axios.post(`${API}/product`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        }
    })
}


// apio for getting all categories one by one 

export const getCategories = () => {
    return axios.get(`${API}/category`)
}

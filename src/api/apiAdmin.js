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

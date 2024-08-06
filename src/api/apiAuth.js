import axios from 'axios'
import { API } from '../utils/config'


export const register = (user) => {


    return axios.post(`${API}/user/signup`, user, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

// register function ta user er details gula accept korbe and return korbe ekta axios call 
// axios.post er modhe first perameter ta hbe ekta api link , second peramter ta hbe kon kon data nibe . ekhne seta hbe holo ekta user object  and third r ekta jinis ase 
//   {
//     headers: {
//         "Content-Type": "application/json"
//     }

// third perameter ta holo ekta object jar modhe headers name ekta object thakbe er key hbe Content-Type and value  "application/json"

export const login = (user) => {
    return axios.post(`${API}/user/signin`, user, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
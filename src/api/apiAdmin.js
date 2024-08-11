/* eslint-disable no-unused-vars */
import { API } from "../utils/config";
import axios from "axios";


// ei functrion ta ekta token accept krobe karon category banate gele token lagbe admin er token....
export const createCategory = (token, data) => {
    return axios.post(`{API}/category`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}
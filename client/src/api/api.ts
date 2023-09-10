import axios from "axios";

export const instanse = axios.create({
    withCredentials:true,
    baseURL:"http://localhost:5000/api/",
    
})
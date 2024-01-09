import axios from 'axios';

export const key = "83b9270a34d3826540f451f2d6fd616bbef3a6ec";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`

    }
})

export default api;
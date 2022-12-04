import axios from "axios"

export const apiData = axios.create({
    baseURL: `https://kenziehub.herokuapp.com/`,
    timeout: 6666
})
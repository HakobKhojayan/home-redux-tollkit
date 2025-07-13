import axios from "axios";

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const $authHost = axios.create({
    withCredentials: true,
    headers
})//tokeni hamar e

export const $host = axios.create({
    headers
})

// axios instans
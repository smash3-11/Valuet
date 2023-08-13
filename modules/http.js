import axios from 'axios'
export const BASE_URL = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    try {
        const res = await axios.get(BASE_URL + path)

        return res
    } catch (e) {
        throw new Error('Something went wrong ' + e.message)
    }
}

export const postData = async (path, body) => {
    try {
        const res = await axios.post(BASE_URL + path, body)

        return res
    } catch (e) {
        throw new Error('Something went wrong ' + e.message)
    }
}

export const patchData = async (path, body) => {
    try {
        const res = await axios.patch(BASE_URL + path, body)

        return res
    } catch (e) {
        throw new Error('Something went wrong ' + e.message)
    }
}

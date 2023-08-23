import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7e5a89d62c6a4664902678b405d63fc5'
    }
})
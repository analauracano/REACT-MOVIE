import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '81475c3bde30c469564733bb521f4d1c',
        language: 'pt-BR',
        page: 1,
    }
})

export default api;
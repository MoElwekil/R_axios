import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID mEy5zYt77kML0SjBahkBthvxieunPVLZf8FyttVEUB8'
    }
})
import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    headers: {
        Authorization: 'Bearer AIzaSyDV-yVppvM2elNpZvlPsMGezQEJdEyreeg',
    },
});
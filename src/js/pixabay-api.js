import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54908313-686938f30eb04142f9ec31b4f';

export async function getImagesByQuery(query, page) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
    };

    const response = await axios.get(BASE_URL, { params });

    return response.data;
}
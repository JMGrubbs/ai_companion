import axios from 'axios';

const fastApiUrl = process.env.REACT_APP_FASTAPI_URL_PROD;
const apiKey = process.env.REACT_APP_API_KEY;

const apiClient = axios.create({
    baseURL: fastApiUrl,
    timeout: 2000,
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json' }
});

export default apiClient;


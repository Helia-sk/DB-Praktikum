import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5173/', // Flask backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

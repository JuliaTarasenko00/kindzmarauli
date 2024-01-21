import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://kindzmarauli-backend.onrender.com',
});

export const setToken = (token) => {
  $instants.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  $instants.defaults.headers.common['Authorization'] = '';
};

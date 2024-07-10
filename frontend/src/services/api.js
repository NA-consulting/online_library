/*
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const registerUser = (userData) => API.post('/users/register', userData);
export const loginUser = (userData) => API.post('/users/login', userData);
*/

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

export const getUserProfile = async () => {
  return await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

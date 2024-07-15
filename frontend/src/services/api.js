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



export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/collection`);
    return response.data;
  } catch (error) {
    throw error;
  }
  /*
  return await axios.get(`${API_URL}/collection`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  */
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const getUserBooks = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/profile/${userId}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user books:', error);
    throw error;
  }
};

export const getUserEmprunts = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/profile/${userId}/emprunts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user emprunts:', error);
    throw error;
  }
};

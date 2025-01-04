// src/services/apiService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Update with your backend URL if different

// Local authentication
export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password });
    console.log(response.data);
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Google authentication
export const googleLogin = () => {
  window.location.href = `${API_URL}/auth/google`;
};

// ICP authentication
export const icpLogin = () => {
  window.location.href = `${API_URL}/auth/icp-login`;
};
import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

export const authService = {
  async login(email: string, password: string) {
    try {
      console.log('Attempting login with email:', email);
      const response = await api.post('/auth/login', { 
        email,  // Backend expects 'email' field
        password 
      });
      
      if (response.data) {
        console.log('Login successful:', response.data);
        return response;
      }
      throw new Error('Invalid response from server');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async register(userData: any) {
    try {
      const response = await api.post('/auth/register', userData);
      if (response.data.success) {
        // Store user data but don't automatically log in
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

export const contactService = {
  submitContact: async (contactData: any) => {
    const response = await api.post('/contact', contactData);
    return response.data;
  },
};

export const newsletterService = {
  subscribe: async (email: string, preferences?: any) => {
    const response = await api.post('/newsletter/subscribe', { email, preferences });
    return response.data;
  },
};

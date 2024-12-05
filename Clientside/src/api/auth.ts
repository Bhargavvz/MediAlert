import axios from 'axios';
import { API_URL } from '../config';

const AUTH_URL = `${API_URL}/api/auth`;

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
  token: string;
}

export const register = async (userData: RegisterData): Promise<AuthResponse> => {
  try {
    console.log('Making registration request to:', `${AUTH_URL}/register`);
    
    // Ensure email is lowercase and all fields are trimmed
    const registrationData = {
      ...userData,
      email: userData.email.toLowerCase().trim(),
      password: userData.password.trim(),
      firstName: userData.firstName.trim(),
      lastName: userData.lastName.trim()
    };
    
    console.log('Registration data (email only):', { email: registrationData.email });
    
    const response = await axios.post<AuthResponse>(`${AUTH_URL}/register`, registrationData);
    console.log('Registration successful:', response.status);
    
    return response.data;
  } catch (error: any) {
    console.error('Registration error:', error);
    if (axios.isAxiosError(error)) {
      console.error('Server response:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
    throw error;
  }
};

export const login = async (credentials: LoginData): Promise<AuthResponse> => {
  try {
    // Ensure email is lowercase and credentials are trimmed
    const loginData = {
      email: credentials.email.toLowerCase().trim(),
      password: credentials.password.trim()
    };
    
    console.log('Making login request to:', `${AUTH_URL}/login`);
    
    const response = await axios.post<AuthResponse>(`${AUTH_URL}/login`, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    
    if (!response.data || !response.data.token) {
      console.error('Invalid response format:', response.data);
      throw new Error('Invalid response from server');
    }
    
    // Store the token
    localStorage.setItem('token', response.data.token);
    
    console.log('Login successful');
    return response.data;
  } catch (error: any) {
    console.error('Login error:', error);
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || 'Invalid credentials';
      console.error('Server response:', error.response?.data);
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred');
  }
};

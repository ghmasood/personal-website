import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const nextApi: AxiosInstance = axios.create({
  baseURL: '/api', // Points to Next.js API routes
  headers: { Accept: '*/*', 'Content-Type': 'application/json' },
});

// Request interceptor: Add headers or other common configurations
nextApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Optionally modify request here (e.g., add auth headers if needed)
    console.log(`Request made to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor: Log or handle response errors globally
nextApi.interceptors.response.use(
  (response: AxiosResponse) => {
    // Optionally handle successful response (logging, etc.)
    console.log(`Response received from ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.data || error.message);

    // Handle errors based on status, e.g., 401 for auth, retry logic, etc.
    if (error.response && error.response.status === 401) {
      // Handle authorization errors, e.g., refresh token or redirect
    }

    return Promise.reject(error);
  }
);

export default nextApi;

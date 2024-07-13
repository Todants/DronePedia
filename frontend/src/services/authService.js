import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const $api = axios.create({
    baseURL: API_URL
  })


const register = async (username, email, password) => {
    const response = await $api.post('accounts/', {
        username,
        email,
        password
      });
  return register.data;
};

const login = (email, password) => {
  return axios.post(API_URL + '/login/', {
    email,
    password
  }).then(response => {

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

export {
  register,
  login,
  logout
};
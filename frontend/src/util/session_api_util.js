import axios from 'axios';
import { logoutUser } from '../actions/session_actions';

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// export const logout = () => dispatch => {
//   localStorage.removeItem("jwtToken");
//   APIUtil.setAuthToken(false);
//   dispatch(logoutUser())
// }
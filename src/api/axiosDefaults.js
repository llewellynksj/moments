import axios from "axios";

axios.defaults.baseURL = 'https://react-wt-e10c60ca8ff7.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
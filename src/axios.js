import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    common: { 
      Authorization : 'AUTH TOKEN AUTHORIZATION'
    }
  }
});

// instance.defaults.headers.common.Authorization = 'AUTH TOKEN THIRD INSTANCE';
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN SET AT INSTANCE';

instance.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

export default instance;
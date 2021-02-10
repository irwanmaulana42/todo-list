import axios from 'axios';
import { authHeader, getUser } from './authHeader';

const API_URL = 'http://localhost:8000/api/v1';

class UserService {
  getTodos() {
    return axios.get(API_URL + '/todos', {
      headers: authHeader(),
      params: {
        user_id: getUser().id
      }
    })
      .then((response) => {
        return Promise.resolve(response.data)
      })
  }

  checkLogin() {
    return axios.get(API_URL + '/verify', {
      headers: authHeader(),
    })
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }

  postTodos(task, label_id) {
    const params = new URLSearchParams();
    params.append('task', task);
    params.append('user_id', getUser().id);
    params.append('label_id', label_id);
    return axios.post(API_URL + '/todos/store', params, {
      headers: authHeader(),
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
  }

  editTodos(task, label_id, id) {
    console.log('task', task);
    console.log('label', label_id);
    console.log('id', id);
    const params = new URLSearchParams();
    params.append('task', task);
    params.append('user_id', getUser().id);
    params.append('label_id', label_id);
    return axios.put(API_URL + '/todos/edit/' + id, params, {
      headers: authHeader(),
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
  }

  setCompletedTodos(value, id){
    const params = new URLSearchParams();
    params.append('completed', value);
    params.append('user_id', getUser().id);
    return axios.put(API_URL + '/todos/edit/' + id, params, {
      headers: authHeader(),
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
  }

  deleteTodos(id){
    return axios.delete(API_URL + '/todos/delete/' + id, {
      headers: authHeader()
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
  }

  getLabels(){
    return axios.get(API_URL + '/label', {
      headers: authHeader(),
    })
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }
}

export default new UserService();
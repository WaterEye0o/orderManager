import axios from 'axios';


// const baseUrl ='http://116.228.31.185:8025/ierp/kapi'
const baseUrl = '/ierp/kapi'
export function getToken () {
  const token= localStorage.getItem("token");
  console.log('token',token)
  return token
  // accessToken = token
}
export function setToken (token?: any) {
  localStorage.setItem("token", token);
}

export function post (path: string, params?: any) {
  return axios.request({
    method: 'post',
    url: baseUrl + path,
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
      'accessToken': getToken()
    }
  }).then((v) => v.data)
}
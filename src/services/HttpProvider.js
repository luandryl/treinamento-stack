'use-strict'
import axios from 'axios'

const config = {
  base_url: 'https://api-unectodo.herokuapp.com/',
}

const _getHeaders = () => {
  return JSON.parse(localStorage.getItem('user')) 
    ? { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token.acess_token}` }
    : ''
}

const get = (resource) => {
  return axios.get(config.base_url + resource, {headers: _getHeaders()})
}

const post = (resource, data) => {
  return axios.post(config.base_url + resource, data, {headers: _getHeaders()})
}

const put = (resource, data) => {
  return axios.put(config.base_url + resource, data, {headers: _getHeaders()})
}

const del = (resource) => {
  return axios.delete(config.base_url + resource, {headers: _getHeaders()})
}


export const HttpProvider = {
  get,
  post,
  put,
  del
}
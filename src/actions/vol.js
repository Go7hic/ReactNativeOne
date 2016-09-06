import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import api from '../config/api'
import axios from 'axios'
export const getVolRequest = createAction(types.GET_VOL, () => {
  return axios.get(api.homePage)
    .then(response => {
      return {
        vol: response.data,
      }
    })
    .catch((error) => {
      throw error
    })
})

import * as types from './ActionTypes'
import { createAction } from 'redux-actions'
import * as request from '../services/request'
import api from '../config/api'

export const getVolRequest = createAction(types.GET_VOL, async() => {
  return await request.get(api.homePage)
    .then(json => {
      if (json.success) {
        return {
          vol: json.data,
        }
      } else {
        return {
          vol: json,
        }
      }
    })
})

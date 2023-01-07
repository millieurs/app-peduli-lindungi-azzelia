import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import configReducer from './reducers/configReducer'

export default configureStore({
  reducer: {
    user:userReducer,
    config:configReducer
  }
})
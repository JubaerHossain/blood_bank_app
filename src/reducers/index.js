import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';


import appReducer from './app-sate';
import userReducer from './user';

export default combineReducers({
  form: formReducer,
  appState: appReducer,
  user:userReducer,
});

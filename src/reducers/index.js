import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';


import appReducer from './app-sate';
import profile from './profile';

export default combineReducers({
  form: formReducer,
  appState: appReducer,
  profile
});

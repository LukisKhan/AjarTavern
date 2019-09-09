import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import errorReducer from './error_reducer';
export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer,
  errors: errorReducer
});
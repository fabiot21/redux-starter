import {combineReducers} from 'redux';
import exampleReducer from './example_reducer';


const rootReducer = combineReducers({
  example: exampleReducer
});

export default rootReducer;

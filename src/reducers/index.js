import { combineReducers} from 'redux';

import citasReducers from './citasReducers';

export default combineReducers({
    citas: citasReducers
    
});
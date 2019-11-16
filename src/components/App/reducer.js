import initialState from '../../initialState';
import { AppActionsConstants } from './constants.js';


const AppReducer = (state = initialState.app, action) => {
    switch (action.type){
        case AppActionsConstants.REDUCER_ACTION: 
            return state;
        default:
            return state;
    }
}

export default AppReducer;
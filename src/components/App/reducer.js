import initialState from '../../initialState';
import { Constants } from '../../constants';


const AppReducer = (state = initialState.app, action) => {
    switch (action.type){
        case Constants.REDUCER_ACTION: 
            return state;
            
        default:
            return state;
    }
}

export default AppReducer;
import initialState from '../../initialState';
import { Constants } from '../../constants';


const AppReducer = (state = initialState.app, action) => {
    switch (action.type){
        case Constants.REDUCER_ACTION: 
            return state;
        case Constants.REDIRECT_TO_FAVORITES:
            return state.set('redirect_to_favourites', true);

        case Constants.REDIRECT_TO_FIVE_DAYS:
            return state.set('redirect_to_favourites', false);
        
        case Constants.SET_LOCATION_KEY:
            // nullify search results after a new location was selected
            return state.set('redirect_to_favourites', false);

        case Constants.ERROR:
            state = state.set('error', true);
            state = state.set('error_msg', action.msg);
            return state;
        
        case Constants.CLEAR_ERROR:
            state = state.set('error', false);
            state = state.set('error_msg', null);
            return state;
            
        default:
            return state;
    }
}

export default AppReducer;
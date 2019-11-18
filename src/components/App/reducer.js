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
            
        default:
            return state;
    }
}

export default AppReducer;
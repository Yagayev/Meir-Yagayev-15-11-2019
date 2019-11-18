import initialState from '../../initialState';
import { Constants } from '../../constants';


const SearchReducer = (state = initialState.search, action) => {

    switch (action.type){
        case Constants.UPDATE_SEARCH_TERM:
            state = state.set('search_term', action.val);
            return state;
        
        case Constants.UPDATE_SEARCH_RESULTS:
            state = state.set('results', action.payload.data);
            return state;

        case Constants.SET_LOCATION_KEY:
            // nullify search results after a new location was selected
            state = state.set('search_term', '');
            state = state.set('results', []);
            return state;

        default:
            return state;
    }
}

export default SearchReducer;
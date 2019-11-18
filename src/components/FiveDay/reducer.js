import initialState from '../../initialState';
import { Constants } from '../../constants';


const FiveDayReducer = (state = initialState.five_day_forcast, action) => {

    switch (action.type){
        case Constants.REDUCER_ACTION: 
            return state;
        case Constants.SET_FIVE_DAY_RESULTS:
            state = state.set('location_name', action.payload.name);
            state = state.set('location_key', action.payload.key);
            state = state.set('results', action.payload.results);
            return state;
        default:
            return state;
    }
}

export default FiveDayReducer;
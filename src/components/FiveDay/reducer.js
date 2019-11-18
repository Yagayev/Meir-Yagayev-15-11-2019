import initialState from '../../initialState';
import { Constants } from '../../constants';


const FiveDayReducer = (state = initialState.five_day_forcast, action) => {

    switch (action.type){
        case Constants.REDUCER_ACTION: 
            return state;
        case Constants.SET_FIVE_DAY_RESULTS:
            console.log(action.payload.data.DailyForecasts);
            state = state.set('results', action.payload.data.DailyForecasts);
            console.log(state)
            return state;
        case Constants.SET_LOCATION_KEY:
            state = state.set('location_name', action.payload.name);
            state = state.set('location_key', action.payload.key);
            return state;
        default:
            return state;
    }
}

export default FiveDayReducer;
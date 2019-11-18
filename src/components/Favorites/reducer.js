import initialState from '../../initialState';
import { Constants } from '../../constants';
const { List } = require('immutable');

function arrayRemove(arr, val){
    return arr.filter(o => o !== val);


}

function arrayAddIfNotContains(arr, val){
    var index = arr.indexOf(val);
    if(index === -1){
        return arr.push(val);
    }
    return arr;
}

const FavoritesReducer = (state = initialState.favorites, action) => {
    let favs;
    switch (action.type){
        case Constants.REDUCER_ACTION: 
            return state;
        case Constants.ADD_TO_FAVORITES:
            favs = state.get('favorite_locations');
            favs = arrayAddIfNotContains(favs, action.id)
            // TODO add save to file
            state = state.set('favorite_locations', favs);
            return state;
        case Constants.REMOVE_FROM_FAVORITES:
            favs = state.get('favorite_locations');
            favs = arrayRemove(favs, action.id)
            // TODO add save to file
            return state.set('favorite_locations', favs)
        default:
            return state;
    }
}

export default FavoritesReducer;
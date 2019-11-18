import initialState from '../../initialState';
import { Constants } from '../../constants';
import {setInStorage, getFromStorage} from '../../Storage'
import {List} from "immutable"

const storageKey = "UniqueMeirHeroloAppStorageKey"


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
            favs = arrayAddIfNotContains(favs, action.id);
            setInStorage(storageKey, favs);

            state = state.set('favorite_locations', favs);
            return state;
        case Constants.REMOVE_FROM_FAVORITES:
            favs = state.get('favorite_locations');
            favs = arrayRemove(favs, action.id)
            setInStorage(storageKey, favs);
            return state.set('favorite_locations', favs);
        case Constants.LOAD_FAVORITES:
            favs = getFromStorage(storageKey);
            console.log(favs);
            if(favs!==null){
                console.log(favs);
                state = state.set('favorite_locations', new List(favs));
            }
            return state;
        default:
            return state;
    }
}

export default FavoritesReducer;
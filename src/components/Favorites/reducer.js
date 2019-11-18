import initialState from '../../initialState';
import { Constants } from '../../constants';
import {setInStorage, getFromStorage} from '../../Storage'
import {Map} from "immutable"

const storageKey = "UniqueMeirHeroloStorageKeyaaasdsadsadddnnnnnaaa"



const FavoritesReducer = (state = initialState.favorites, action) => {
    let favs;
    switch (action.type){
        case Constants.REDUCER_ACTION: 
            return state;
        case Constants.ADD_TO_FAVORITES:
            state = state.setIn(['favorite_locations', action.key], action.name);
            favs = state.get('favorite_locations')
            setInStorage(storageKey, favs);
            return state;
        case Constants.REMOVE_FROM_FAVORITES:
            state = state.deleteIn(['favorite_locations', action.key]);
            favs = state.get('favorite_locations');
            setInStorage(storageKey, favs);
            return state;
        case Constants.LOAD_FAVORITES:
            favs = getFromStorage(storageKey);
            if(favs!==null){
                state = state.set('favorite_locations', new Map(favs));
            }
            return state;
        case Constants.UPDATE_FAVORITE_WEATHER:
            return state.setIn(['favorite_results', action.key], action.payload.data[0])
        default:
            return state;
    }
}

export default FavoritesReducer;
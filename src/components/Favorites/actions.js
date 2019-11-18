import { Constants } from '../../constants';
import { oneDay } from '../../apiURLs'
import { accuwatherKey } from '../../config'


function loadFavoritesAction(){
    return {
        type: Constants.LOAD_FAVORITES
    }
}

function setLocationAction(name, key){
    return{
        type: Constants.SET_LOCATION_KEY,
        payload: {
            key: key,
            name: name
        }
    }
}

function loadFavoriteWeather(key){
    return {
        type: Constants.GET_FAVORITE_WEATHER,
        key: key,
        uri: oneDay+key+"?apikey="+accuwatherKey
    }
}

function updateFavoriteWeather(key, val){
    return {
        type: Constants.UPDATE_FAVORITE_WEATHER,
        key: key,
        payload: val
    }
}

function setError(message){
    return {
        type: Constants.ERROR,
        msg: message
    }
}


let FavoriteActions = {
    loadFavoritesAction,
    setLocationAction,
    loadFavoriteWeather,
    updateFavoriteWeather,
    setError
}

export default FavoriteActions;
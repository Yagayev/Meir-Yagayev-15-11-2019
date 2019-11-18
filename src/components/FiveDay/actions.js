import { Constants } from '../../constants';
import {fiveDays} from '../../apiURLs'
import { accuwatherKey } from '../../config'

function removeFromFavorites(name, key){
    return {
        type: Constants.REMOVE_FROM_FAVORITES,
        name: name, 
        key: key
    }

}

function addToFavorites(name, key){
    return {
        type: Constants.ADD_TO_FAVORITES,
        key: key,
        name: name
    }
}

function flipFavoriteStatusAction(isFavorite, name, key){
    if(isFavorite){
        return removeFromFavorites(name, key);
    }
    else{
        return addToFavorites(name, key);
    }
}

function loadFiveDayForecastAction(loction_key){
    return {
        type: Constants.LOAD_5_DAY_WEATHER_DETAILS,
        uri: fiveDays+loction_key+"?apikey="+accuwatherKey+"&metric=true"
        
    }
}

function setFiveDayAction(res){
    return{
        type: Constants.SET_FIVE_DAY_RESULTS,
        payload: res
    }
}

function setError(message){
    return {
        type: Constants.ERROR,
        msg: message
    }
}


let FiveDayActions = {
    addToFavorites,
    removeFromFavorites,
    flipFavoriteStatusAction,
    loadFiveDayForecastAction,
    setFiveDayAction,
    setError

}

export default FiveDayActions;
import { Constants } from '../../constants';
import {fiveDays} from '../../apiURLs'
import { accuwatherKey } from '../../config'

function reducerAction(val){
    return {
        type: Constants.REDUCER_ACTION,
        val: val
    }
}

function sagaAction(){
    return {
        uri: 'api/uri',
        type: Constants.SAGA_ACTION
    }
}

function removeFromFavorites(id){
    return {
        type: Constants.REMOVE_FROM_FAVORITES,
        id: id
    }

}

function addToFavorites(id){
    return {
        type: Constants.ADD_TO_FAVORITES,
        id: id
    }
}

function flipFavoriteStatusAction(isFavorite, id){
    if(isFavorite){
        return removeFromFavorites(id);
    }
    else{
        return addToFavorites(id);
    }
}

function loadFiveDayForecastAction(loction_key){
    // uri: fiveDays+loction_key+"?apikey="+accuwatherKey+"&metric=true"
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
    reducerAction,
    sagaAction,
    addToFavorites,
    removeFromFavorites,
    flipFavoriteStatusAction,
    loadFiveDayForecastAction,
    setFiveDayAction,
    setError

}

export default FiveDayActions;
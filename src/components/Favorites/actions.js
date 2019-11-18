import { Constants } from '../../constants';

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



let FiveDayActions = {
    reducerAction,
    sagaAction,
    loadFavoritesAction,
    setLocationAction
}

export default FiveDayActions;
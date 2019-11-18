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


let FiveDayActions = {
    reducerAction,
    sagaAction,
    loadFavoritesAction
}

export default FiveDayActions;
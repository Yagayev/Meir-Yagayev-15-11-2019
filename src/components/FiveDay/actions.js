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


let FiveDayActions = {
    reducerAction,
    sagaAction,
    addToFavorites,
    removeFromFavorites,
    flipFavoriteStatusAction,
}

export default FiveDayActions;
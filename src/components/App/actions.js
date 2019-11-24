import { Constants } from '../../constants';

function loadFavoritesAction(){
    return {
        type: Constants.LOAD_FAVORITES
    }
}

function redirectToFavorites(){
    return {
        type: Constants.REDIRECT_TO_FAVORITES
    }
}

function redirectToFiveDay(){
    return {
        type: Constants.REDIRECT_TO_FIVE_DAYS
    }
}


function clearErrorAction(){
    return {
        type: Constants.CLEAR_ERROR
    }
}


let AppActions = {    
    redirectToFavorites,
    redirectToFiveDay,
    clearErrorAction,
    loadFavoritesAction,

}

export default AppActions;
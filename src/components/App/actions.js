import { Constants } from '../../constants';


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


let AppActions = {    
    redirectToFavorites,
    redirectToFiveDay
}

export default AppActions;
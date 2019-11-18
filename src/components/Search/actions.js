import { Constants } from '../../constants';
import { autoComplete } from '../../apiURLs'
import { accuwatherKey } from '../../config'

function updateSearchTermAction(val){
    return {
        type: Constants.UPDATE_SEARCH_TERM,
        val: val
    }
}

function submitSearchAction(search_term){
    return {
        type: Constants.SUBMIT_SEARCH,
        uri: autoComplete+"?apikey="+accuwatherKey+"&q="+search_term
    }

}

function updateSearchResultsActions(res){
    return {
        type: Constants.UPDATE_SEARCH_RESULTS,
        payload: res
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

function setError(message){
    return {
        type: Constants.ERROR,
        msg: message
    }
}

let SearchActions = {
    updateSearchTermAction,
    submitSearchAction,
    setError,
    updateSearchResultsActions,
    setLocationAction,
}

export default SearchActions;
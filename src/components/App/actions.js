import { AppActionsConstants } from './constants';

function reducerAction(val){
    return {
        type: AppActionsConstants.REDUCER_ACTION,
        val: val
    }
}

function sagaAction(){
    return {
        uri: 'api/uri',
        type: AppActionsConstants.SAGA_ACTION
    }
}

let AppActions = {
    reducerAction,
    sagaAction
}

export default AppActions;
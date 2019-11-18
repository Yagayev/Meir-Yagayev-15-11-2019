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

let FiveDayActions = {
    reducerAction,
    sagaAction,
}

export default FiveDayActions;
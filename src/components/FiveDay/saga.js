import { Constants } from '../../constants';
import { call, put, takeEvery } from 'redux-saga/effects'
import FiveDayActions from './actions'
import axios from 'axios';



function* handleLoadDetails(action){
  console.log("handleLoadDetails")
  try {
    const res = yield call(axios.get, action.uri);

    console.log("res: ", res)
    yield put(FiveDayActions.setFiveDayAction(res));
  } catch (e) {
    yield put(FiveDayActions.setError(e.message));
  }
}


function* FiveDaySaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(Constants.LOAD_5_DAY_WEATHER_DETAILS, handleLoadDetails);
}

export default FiveDaySaga;
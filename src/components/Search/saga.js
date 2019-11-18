import { Constants } from '../../constants';
import { call, put, takeEvery } from 'redux-saga/effects'
import SearchActions from './actions'
import axios from 'axios';



function* handleLoadDetails(action){
  console.log("handleLoadDetails")
  try {
    const res = yield call(axios.get, action.uri);
    console.log("res: ", res)
    yield put(SearchActions.updateSearchResultsActions(res));
  } catch (e) {
    yield put(SearchActions.setError(e.message));
  }
}


function* SearchSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(Constants.SUBMIT_SEARCH, handleLoadDetails);
}

export default SearchSaga;
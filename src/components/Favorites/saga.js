import { Constants } from '../../constants';
import { call, put, takeEvery } from 'redux-saga/effects'
import FavoriteActions from './actions'
import axios from 'axios';

function* handleLoadFavoriteWeather(action){
  try {
    const res = yield call(axios.get, action.uri);

    yield put(FavoriteActions.updateFavoriteWeather(action.key, res));
  } catch (e) {
    yield put(FavoriteActions.setError(e.message));
  }
}


function* FavoritesSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(Constants.GET_FAVORITE_WEATHER, handleLoadFavoriteWeather);
}


export default FavoritesSaga;
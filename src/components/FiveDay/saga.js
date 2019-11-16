import { Constants } from '../../constants';
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from './actions'

function* handle(action){
    //   console.log('LoginSaga=', action);
      try {
        const res = yield call(fetch, action.uri,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
          });
    
        const json = yield call([res, 'json']); //retrieve body of response
        yield put(AppActions.reducerAction(json));
      } catch (e) {
        yield put(AppActions.reducerAction(e.message));
      }
    }
    

function* AppSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(Constants.SAGA_ACTION, handle);
}

export default AppSaga;
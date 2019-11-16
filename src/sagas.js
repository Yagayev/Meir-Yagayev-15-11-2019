import { all } from 'redux-saga/effects'
import AppSaga from './components/App/saga'
import FiveDaySaga from './components/FiveDay/saga'

export default function* Sagas() {
    yield all([
        AppSaga(),
        FiveDaySaga(),
    ])
}

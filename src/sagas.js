import { all } from 'redux-saga/effects'
import AppSaga from './components/App/saga'
import FiveDaySaga from './components/FiveDay/saga'
import FavoritesSaga from './components/Favorites/saga';

export default function* Sagas() {
    yield all([
        AppSaga(),
        FiveDaySaga(),
        FavoritesSaga(),
    ])
}

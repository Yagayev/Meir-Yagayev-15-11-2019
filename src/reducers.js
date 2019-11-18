import { combineReducers } from 'redux';
import AppReducer from './components/App/reducer';
import FiveDayReducer from './components/FiveDay/reducer';
import FavoritesReducer from './components/Favorites/reducer';


export default combineReducers({
  app: AppReducer,
  five_day_forcast: FiveDayReducer,
  favorites: FavoritesReducer,
});

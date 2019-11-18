
const { List, Map } = require('immutable');

export default {
    app: Map({
        redirect_to_favourites: false


    }),
    search: Map({
        search_term: "",
        suggestions: [],
    }),
    favorites: Map({
        favorite_locations: List([]),
    }),
    five_day_forcast: Map({
        location_name: '',
        location_key: null,
        results: null,
    }),
    
};

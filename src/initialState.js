
const { Map } = require('immutable');

export default {
    app: Map({
        redirect_to_favourites: false,
        error: false,
        error_msg: null
    }),
    search: Map({
        search_term: "",
        results: Map({}),
    }),
    favorites: Map({
        favorite_locations: Map({}),
        favorite_results: Map({})
    }),
    five_day_forcast: Map({
        location_name: "Tel Aviv",
        location_key: "215854",
        results: null,
    }),
    
};

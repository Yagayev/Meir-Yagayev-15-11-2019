
const { List, Map } = require('immutable');

export default {
    app: Map({

    }),
    search: Map({
        search_term: "",
        suggestions: [],
    }),
    favorites: List([]),
    five_day_forcast: Map({
        location_name: '',
        location_key: null,
        results: null,
        is_favourite: false
    }),
    
};

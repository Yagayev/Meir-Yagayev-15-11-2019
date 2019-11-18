
const fiveDays = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
// "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=kuPFhszoaAEAzg3NAcbPOreli9MDNkVl&metric=true"
// + locationKey (215854)
// {
//     apikey: key,
//     metric: true
// }


const autoComplete = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
// {
//     apikey: key,
//     q: 'tel'
// }

const oneDay = "http://dataservice.accuweather.com/currentconditions/v1/"
// + locationKey (215854)
// {
//     apikey: key
// }

export {fiveDays, autoComplete, oneDay}
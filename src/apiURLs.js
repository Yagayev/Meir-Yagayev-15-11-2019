
const fiveDays = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/"
// + locationKey (215854)
// {
//     apikey: key,
//     metric: true
// }


const autoComplete = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete"
// {
//     apikey: key,
//     q: 'tel'
// }

const oneDay = "https://dataservice.accuweather.com/currentconditions/v1/"
// + locationKey (215854)
// {
//     apikey: key
// }

export {fiveDays, autoComplete, oneDay}
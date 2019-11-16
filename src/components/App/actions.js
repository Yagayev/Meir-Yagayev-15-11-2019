import { Constants } from '../../constants';

function reducerAction(val){
    return {
        type: Constants.REDUCER_ACTION,
        val: val
    }
}

function sagaAction(){
    return {
        uri: 'api/uri',
        type: Constants.SAGA_ACTION
    }
}

function setTelAvivAction(){
    return{
        type: Constants.SET_FIVE_DAY_RESULTS,
        payload: {
            name: "Tel Aviv",
            key: "215854",

            results: {
                "Headline": {
                "EffectiveDate": "2019-11-16T19:00:00+02:00",
                "EffectiveEpochDate": 1573923600,
                "Severity": 7,
                "Text": "Mild Saturday night",
                "Category": "heat",
                "EndDate": "2019-11-17T07:00:00+02:00",
                "EndEpochDate": 1573966800,
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
                },
                "DailyForecasts": [
                {
                    "Date": "2019-11-16T07:00:00+02:00",
                    "EpochDate": 1573880400,
                    "Temperature": {
                    "Minimum": {
                        "Value": 16.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 24.3,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 17,
                    "IconPhrase": "Partly sunny w/ t-storms",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-17T07:00:00+02:00",
                    "EpochDate": 1573966800,
                    "Temperature": {
                    "Minimum": {
                        "Value": 14.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 26.4,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                    },
                    "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-18T07:00:00+02:00",
                    "EpochDate": 1574053200,
                    "Temperature": {
                    "Minimum": {
                        "Value": 13.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 24.3,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 4,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                    },
                    "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-19T07:00:00+02:00",
                    "EpochDate": 1574139600,
                    "Temperature": {
                    "Minimum": {
                        "Value": 12.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 25.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                    },
                    "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-20T07:00:00+02:00",
                    "EpochDate": 1574226000,
                    "Temperature": {
                    "Minimum": {
                        "Value": 11.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 24.7,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                    },
                    "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
                }
                ]
            }
        }

    }

}

function setHelsinkiAction(){
    return{
        type: Constants.SET_FIVE_DAY_RESULTS,
        payload: {
            name: "Helsinki",
            key: "133328",

            results: {
                "Headline": {
                "EffectiveDate": "2019-11-17T07:00:00+02:00",
                "EffectiveEpochDate": 1573966800,
                "Severity": 5,
                "Text": "Expect showers Sunday",
                "Category": "rain",
                "EndDate": "2019-11-17T19:00:00+02:00",
                "EndEpochDate": 1574010000,
                "MobileLink": "http://m.accuweather.com/en/fi/helsinki/133328/extended-weather-forecast/133328?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?unit=c&lang=en-us"
                },
                "DailyForecasts": [
                {
                    "Date": "2019-11-16T07:00:00+02:00",
                    "EpochDate": 1573880400,
                    "Temperature": {
                    "Minimum": {
                        "Value": 0.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 2.9,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 8,
                    "IconPhrase": "Dreary",
                    "HasPrecipitation": false
                    },
                    "Night": {
                    "Icon": 7,
                    "IconPhrase": "Cloudy",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-17T07:00:00+02:00",
                    "EpochDate": 1573966800,
                    "Temperature": {
                    "Minimum": {
                        "Value": 3.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 7.7,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 12,
                    "IconPhrase": "Showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                    "Icon": 38,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-18T07:00:00+02:00",
                    "EpochDate": 1574053200,
                    "Temperature": {
                    "Minimum": {
                        "Value": 4.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 6.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 6,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                    },
                    "Night": {
                    "Icon": 8,
                    "IconPhrase": "Dreary",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-19T07:00:00+02:00",
                    "EpochDate": 1574139600,
                    "Temperature": {
                    "Minimum": {
                        "Value": 4.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 6.4,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 12,
                    "IconPhrase": "Showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                    "Icon": 8,
                    "IconPhrase": "Dreary",
                    "HasPrecipitation": false
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2019-11-20T07:00:00+02:00",
                    "EpochDate": 1574226000,
                    "Temperature": {
                    "Minimum": {
                        "Value": 3.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 6.6,
                        "Unit": "C",
                        "UnitType": 17
                    }
                    },
                    "Day": {
                    "Icon": 6,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                    },
                    "Night": {
                    "Icon": 7,
                    "IconPhrase": "Cloudy",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                    "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=5&unit=c&lang=en-us"
                }
                ]
            }
        }
    }

}




let AppActions = {
    reducerAction,
    sagaAction,
    setTelAvivAction,
    setHelsinkiAction
}

export default AppActions;
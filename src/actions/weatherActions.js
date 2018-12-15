import store from '../store';
import * as actionEvents from './actionTypes';

export const fetchWeather = () => {
    return {
        type: actionEvents.FETCH_WEATHER
    }
}

export const receiveWeatherInfo = post => {
    return {
        type: actionEvents.RECEIVED_WEATHER_INFO,
        data: post
    };
};

export const receiveError = () => {
    return {
        type: actionEvents.RECEIVE_ERROR
    };
};

export const thunk_action_creator = city => {
    const API_KEY = 'YOUR_API_KEY';
    const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    store.dispatch(fetchWeather());    

    return function(dispatch, getState){
        return fetch(WEATHER_URL)
            .then(data => data.json())
            .then(data => {
                if (data.message === "city not found") {
                    throw new Error("No such city found!!");
                } else dispatch(receiveWeatherInfo(data));
            })
            .catch(err => dispatch(receiveError()));
    };
};


export const changeCity = city => {
    return {
        type: actionEvents.CHANGE_CITY,
        data: city
    };
}
'use strict';
import * as actionEvents from '../actions/actionTypes';
import {initialState} from '../initialState';

export function weatherReducer(state = initialState.weather, action) {
    const actionType = action.type;

    switch (actionType) {
        case actionEvents.FETCH_WEATHER:
            return Object.assign({}, state, {
                isLoading: true,
                weatherInfo: {},
                isError: false
            });

        case actionEvents.RECEIVED_WEATHER_INFO:
            return Object.assign({}, state, {
                weatherInfo: action.data,
                isLoading: false,
                isError: false
            });

        case actionEvents.RECEIVE_ERROR:
            return Object.assign({}, state, {
                isError: true,
                isLoading: false
            });

        case actionEvents.CHANGE_CITY:
            return Object.assign({}, state, {
                isError: false,
                isLoading: false,
                weatherInfo: {},
                city: action.data
            })
        default:
            return state;
    }
}
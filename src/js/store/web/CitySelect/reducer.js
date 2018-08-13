import {
    SET_CITY,
    SET_WEATHER
} from './actionTypes'

const INITIAL_STATE = {}
function City(state=INITIAL_STATE, action) {

    switch(action.type){
        case SET_CITY:            
            return action.city
    
        default: 
            return state
    }
}
function Weather(state={}, action) {
    switch(action.type) {
        case SET_WEATHER:
            return action.weather

        default:
            return state

    }
}

export {City, Weather}
import { combineReducers } from 'redux'

import {City, Weather} from "./web/CitySelect/reducer"

const composeReducers = () => {
    return combineReducers({
        City,
        Weather
    })
}

export default composeReducers
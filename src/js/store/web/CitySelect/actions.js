import {SET_CITY, SET_WEATHER} from './actionTypes'
import {API_KEY}from '../../../../utils/constants'

import axios from 'axios'


export function SetCityData(selectedCity) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            console.log("selectedCity", selectedCity[0])
            let city = selectedCity[0]

            dispatch({type:SET_CITY, city: city})
            dispatch(SetCityWeather(city.id))

        })
    }
}

export function SetCityWeather(cityId) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            console.log("ID", cityId)

            let url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${API_KEY}`

            axios.get(url)
                .then( res => {
                    dispatch({type: SET_WEATHER, weather: res.data.list})
                    resolve("Weather Set")
                })
                .catch( err => {
                    reject("Error in setting Weather", err)
                })
        })
    }
}
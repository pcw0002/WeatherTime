import {SET_CITY, SET_WEATHER} from './actionTypes'
import {API_KEY}from '../../../../utils/constants'

import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'


export function SetCityData(selectedCity) {
    return (dispatch, getState) => {
        if(!_.isNil(selectedCity) && selectedCity.length > 0) {
            let city = selectedCity[0]

            dispatch({type:SET_CITY, city: city})
            dispatch(SetCityWeather(city.id))
        } else {
            //Do nothing here if an invalid City is "selected"
        }
    }
}

export function SetCityWeather(cityId) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            let url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${API_KEY}`

            axios.get(url)
                .then( res => {
                    dispatch({type: SET_WEATHER, weather: _groupWeather(res.data)})
                    resolve("Weather Set")
                })
                .catch( err => {
                    reject("Error in setting Weather", err)
                })
        })
    }
}

function _groupWeather(data) {
    _.map(data.list, (weather) => {
      return weather.groupableDate = moment(weather.dt_txt, "YYYY-MM-DD HH:mm:ss").format("MM/DD/YYYY")
   })

   let groupedData = _.groupBy(data.list, "groupableDate")
   let groupArray = []
   _.forEach(groupedData, (item) => {
        groupArray.push(item)
   })
   
   return groupArray
}
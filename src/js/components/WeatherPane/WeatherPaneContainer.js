import React, {Component} from 'react'
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'

import {API_KEY} from '../../../utils/constants'


class WeatherPaneContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityData: {},
            groupedWeather: {}
        }
    }

    _groupWeather = (data) => {
         _.map(data.list, (weather) => {
           return weather.groupableDate = moment(weather.dt_txt, "YYYY-MM-DD HH:mm:ss").format("MM/DD/YYYY")
        })

        return _.groupBy(data.list, "groupableDate")
    }

    componentWillReceiveProps(nextProps) {
        //Instead of checking to see if nextProps === this.props and not updating
        //the weather if the props are the same, I decided to always update the weather
        //so that the user sees the most up to date forecast for the selected city
        let url = `https://api.openweathermap.org/data/2.5/forecast?id=${nextProps.selectedCity.id}&appid=${API_KEY}`

        axios.get(url)
            .then( res => {
                this.setState({
                    groupedWeather: this._groupWeather(res.data),
                    cityData: res.data.city
                })
            })
    }

    render() {
        return (
            <div>Weather </div>
        )
    }
}


export default WeatherPaneContainer
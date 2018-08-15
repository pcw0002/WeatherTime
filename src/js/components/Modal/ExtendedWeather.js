import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import _ from 'lodash'

import WeatherPane from '../WeatherPane/WeatherPane'





const ExtendedWeather = props => 
    <div>
        ExtendedWeather
        <Button
            onClick={props.onClick}
            bsSize={"small"}
            bsStyle={"danger"}
        > Close </Button>
        <div className={"row paneContainer"}>
            <div className={"col-lg-1"}> </div>
            <div className={"col-lg-10"}>
            {_.map(props.weather, (hourlyWeather, index) => {
                return props.renderWeather(hourlyWeather, index)
            })}
            </div>
            <div className={"col-lg-1"}> </div>
        </div>
    </div>

export default ExtendedWeather
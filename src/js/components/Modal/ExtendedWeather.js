import React from 'react'
import {Button} from 'react-bootstrap'
import _ from 'lodash'
import moment from 'moment'

import WeatherPane from '../WeatherPane/WeatherPane'

const ExtendedWeather = props => 
    <div>
        <div className={"col-lg-2"}>
            <Button
                onClick={props.onClick}
                bsSize="small"
                bsStyle="danger"
                className={"pullLeft"}
            > Go Back to the 5 day view </Button>
        </div>
        
        <div className={"row paneContainer"}>
            {_.map(props.weather, (hourlyWeather, index) => {
                return (
                    <div className={"col-lg-3"} key={index}>
                        <WeatherPane
                            icon={`https://openweathermap.org/img/w/${hourlyWeather.weather[0].icon}.png`}
                            date={moment(hourlyWeather.dt_txt, "YYYY-MM-DD HH:mm:ss").format("dddd, MMMM Do YYYY, h:mm:ss a")}
                            weather={hourlyWeather.weather[0].main}
                            weatherDescription={hourlyWeather.weather[0].description}
                            onClick={() => {}}
                            temp={hourlyWeather.main.temp}
                        />
                    </div>
                )
            })}
        </div>
    </div>

export default ExtendedWeather
import React from 'react'
import {Thumbnail} from 'react-bootstrap'

import {kelvinToFar} from '../../../utils/tempConversion' 

const WeatherPane = props => 
    
    <div>
        <Thumbnail 
            src={props.icon} 
            onClick={props.onClick} 
            className={"weatherPane"}
        >
            <p>{props.date}</p>
            <p>{props.weather} - {props.weatherDescription}</p>
            <p>{kelvinToFar(props.temp)}° F </p>
        </Thumbnail>
    </div> 



export default WeatherPane
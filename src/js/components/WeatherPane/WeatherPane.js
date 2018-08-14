import React from 'react'
import {Thumbnail} from 'react-bootstrap'

const WeatherPane = props => 
    
    <div>
        <Thumbnail 
            src={props.icon} 
            onClick={props.onClick} 
            className={"weatherPane"}
        >
            <p>{props.date}</p>
            <p>{props.weather} - {props.weatherDescription}</p>
        </Thumbnail>
    </div> 



export default WeatherPane
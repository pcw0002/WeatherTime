import React, {Component} from 'react'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import _ from 'lodash'
import moment from 'moment'

import WeatherPane from './WeatherPane'


class WeatherPaneContainer extends Component {
    
    render() {
        let {weatherInfo} = this.props
        if (!_.isEmpty(weatherInfo)) {
            return (
                <div className={"row paneContainer"}>
                    <div className={"col-lg-1"}>
                    </div>
                        {_.map(weatherInfo, (dailyWeather, index) => {
                            return this.renderWeatherPane(dailyWeather[0], index)
                        })}
                    <div className={"col-lg-1"}>
                    </div>
                </div>
            )
        } else {
            return (null)
        }
        
    }

    renderDetailedWeather = (index) =>  {
        let {weatherInfo} = this.props
    }

    renderWeatherPane = (weatherInfo, index) => {
        if(!_.isNil(weatherInfo)) {
            return (
                <div className={"col-lg-2"} key={index}>
                    <WeatherPane 
                        icon={`https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}
                        date={moment(weatherInfo.dt_txt, "YYYY-MM-DD HH:mm:ss").format("dddd, MMMM Do YYYY, h:mm:ss a")}
                        weather={weatherInfo.weather[0].main}
                        weatherDescription={weatherInfo.weather[0].description}
                        onClick={() => this.renderDetailedWeather(index)}
                    />
                </div>
            )
        } else {
            return(null)
        }
        
    }
}



const mapStateToProps = (state) => ({
    cityInfo: state.City,
    weatherInfo: state.Weather
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherPaneContainer)
import React, {Component} from 'react'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import _ from 'lodash'
import moment from 'moment'

import WeatherPane from './WeatherPane'
import ExtendedWeather from '../Modal/ExtendedWeather'

class WeatherPaneContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showExtended: false
        }
    }

    componentWillReceiveProps(nextProps) {
        //If the component receives new props (The user changes cities) then we need
        // to hide the extended weather.
        this.setState({
            showExtended: false
        })
    }
    
    render() {
        let {weatherInfo} = this.props
        if (!_.isEmpty(weatherInfo)) {
            return (
                <div>
                    <div className={"row paneContainer"}>
                        <div className={"col-lg-1"}>
                        </div>
                        {this.state.showExtended 
                            ? <ExtendedWeather 
                                onClick={this.closeExtendedWeather} 
                                weather={this.state.extendedWeather} 
                                renderWeather={this.renderWeatherPane}
                                cityInfo={this.props.cityInfo}
                              />
                            : _.map(weatherInfo, (dailyWeather, index) => {
                                return this.renderWeatherPane(dailyWeather[0], index)
                            }) }
                            
                        <div className={"col-lg-1"}>
                        </div>
                    </div>
                    <div className={"row"}>
                    </div>
                </div>
            )
        } else {
            return (null)
        }
        
    }

    renderDetailedWeather = (index) =>  {
        let {weatherInfo} = this.props
        this.setState({
            showExtended: true,
            extendedWeather: weatherInfo[index]

        })
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
                        temp={weatherInfo.main.temp}
                    />
                </div>
            )
        } else {
            return(null)
        }
        
    }

    closeExtendedWeather = () => {
        this.setState({
            showExtended: false
        })
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
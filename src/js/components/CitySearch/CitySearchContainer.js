import React, { Component } from 'react';
import axios from 'axios';
import CitySearch from './CitySearch'
import WeatherPaneContainer from '../WeatherPane/WeatherPaneContainer'


class CitySearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityList: [],
            labelKey: option => `${option.name}, ${option.country}`,
            placeholder: 'Search for a City...',
            onChange: (selected) => {
                this.setState({
                    selectedCity: selected
                })
            },
            selectedCity: {
                "id": 4049979,
                "name": "Birmingham",
                "country": "US",
                "coord": {
                  "lon": -86.80249,
                  "lat": 33.52066
                }
            }
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/cityList.json")
        
            .then( res => {
                this.setState({
                    cityList: res.data
                })

            })
            .catch( err => {
                console.log("Error", err)
            })
    }

    render(){
        return (
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-lg-4 offset-lg-4"}>
                        <CitySearch
                            options={this.state.cityList}
                            labelKey={this.state.labelKey}
                            onChange={this.state.onChange}
                            placeholder={this.state.placeholder}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CitySearchContainer
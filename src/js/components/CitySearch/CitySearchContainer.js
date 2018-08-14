import React, { Component } from 'react';
import axios from 'axios';
import CitySearch from './CitySearch'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import _ from 'lodash'

import {SetCityData} from '../../store/web/CitySelect/actions'


class CitySearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityList: [],
            labelKey: option => `${option.name}, ${option.country}`,
            placeholder: 'Search for a City...',
            onChange: (selected) => {
                if (!_.isNil(selected)) {
                    this.props.SetCityData(selected)
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
        )
    }
}

const mapStateToProps = (state) => ({

})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        SetCityData: SetCityData
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CitySearchContainer)
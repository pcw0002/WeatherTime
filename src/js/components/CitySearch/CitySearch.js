import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css'


const CitySearch = props => 
    
    <Typeahead
        onChange={props.onChange}
        labelKey={props.labelKey}
        options= {props.options}
        placeholder={props.placeholder}
    />


export default CitySearch

import React, { useState } from 'react';
import 'whatwg-fetch'
import Input from '../../components/Input';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import './index.css';

const options = ['Apple', 'Orange', 'Pear', 'Mango'];

const ControlPanel = () => {

    const [cityName, updateCityName] = useState("")

    const onInputChange = event => {
        updateCityName(event.target.value)
    }

    const onSubmit = event => {
        fetch('http://opentable.herokuapp.com/api/restaurants?city=toronto')
        .then(function(response) {
           response.json().then(res => {
                console.log(res)
            })
        })
    }

    return(
        <div className="controlPanel">
            <div className="controlPanel-input">
                <Input onChange={onInputChange} label="Select Town" />
            </div>
            <div className="controlPanel-input">
                <Input label="Select Town" />
            </div>
            <div className="controlPanel-input">
                <Dropdown title="Dropdown Menu" options={options} />
            </div>
            <div className="controlPanel-input">
                <Button onClick={onSubmit} value="Search" />
            </div>
        </div>
    )
}

export default ControlPanel;
import React, { useState } from 'react';
import './index.css';

const Restaurant = (props) => {
    const { name, address, city, state, area, postal_code, country, phone, price, image_url} = props;
    return(
        <div className="restaurant-conatiner">
            <img src={image_url}></img>
            <div className="details">
                <div><span class="txt-strong">Name: </span>{name}</div>
                <div><span class="txt-strong">Address: </span>{address}</div>
                <div><span class="txt-strong">City: </span>{city}</div>
                <div><span class="txt-strong">State: </span>{state}</div>
                <div><span class="txt-strong">Area: </span>{area}</div>
                <div><span class="txt-strong">Postal code: </span>{postal_code}</div>
                <div><span class="txt-strong">Country: </span>{country}</div>
                <div><span class="txt-strong">Phone: </span>{phone}</div>
                <div><span class="txt-strong">Price: </span>{price}</div>
            </div>
        </div>
    )
}

export default Restaurant;
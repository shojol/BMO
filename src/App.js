import React, { useState } from 'react';
import 'whatwg-fetch';
import { useDispatch, useSelector } from 'react-redux'
import Input from './components/Input';
import Button from './components/Button';
import Restaurant from './components/Restaurant';
import { fetchRestaurantList, updateRestaurantList } from './actions';
import './App.css';


function App() {
  const dispatch = useDispatch()
  const [cityName, updateCityName] = useState("")
  const [filterby, updateFilterValue] = useState("");
  const restaurantsList = useSelector(state => state.restaurants)

  const onInputChange = event => {
    updateCityName(event.target.value)
  }

  const onFilterChange = event => {
    updateFilterValue(event.target.value)
  }

  const onSubmit = event => {
    dispatch(fetchRestaurantList(cityName))
  }
  const filteredRestaurantsList = restaurantsList.filter(data => {
    return !!(data.name.toUpperCase().includes(filterby.toUpperCase()) || 
              data.area.toUpperCase().includes(filterby.toUpperCase()) || 
              data.address.toUpperCase().includes(filterby.toUpperCase()))
  })

  return (
    <div className="App">
      <div className="controlPanel">
        <div className="controlPanel-input">
          <Input value={cityName} onChange={onInputChange} label="Select Town" />
        </div>
        <div className="controlPanel-input">
          <Button disable={cityName ? true : undefined} onClick={onSubmit} value="Search" />
        </div>
      </div>

      <div className="restaurants">
        <div className="controlPanel-input">
          <Input value={filterby} onChange={onFilterChange} label="Filter by Name/Area/Address" />
        </div>

        <div className="restaurants-list">
          {
            filteredRestaurantsList && filteredRestaurantsList.length ? filteredRestaurantsList.map((restaurant, i) => <Restaurant key={i} {...restaurant} />)
              : <div>No Restaurants found. Please update filter</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;

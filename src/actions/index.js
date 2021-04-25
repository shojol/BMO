
export const FETCH_RESTAURANT_LIST = 'FETCH_RESTAURANT_LIST';
export const UPDATE_RESTAURANT_LIST = 'UPDATE_RESTAURANT_LIST';

export const fetchRestaurantList = payload => {
    return {
        type: FETCH_RESTAURANT_LIST,
        payload
    }
}

export const updateRestaurantList = payload => {
    return {
        type: UPDATE_RESTAURANT_LIST,
        payload
    }
}
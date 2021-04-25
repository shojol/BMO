import { UPDATE_RESTAURANT_LIST } from '../actions'
const INITIAL_STATE = {
    restaurants: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_RESTAURANT_LIST:
            return {
                ...state,
                restaurants: action.payload
            };

        default:
            return state;
    }
};
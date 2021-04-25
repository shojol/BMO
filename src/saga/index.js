import { put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_RESTAURANT_LIST, updateRestaurantList } from '../actions'

export default function* rootSaga() {
    yield all([
        yield takeEvery(FETCH_RESTAURANT_LIST, fetchRestaurant)
    ])
}

function* fetchRestaurant(data) {
    const { restaurants } = yield fetch(`http://opentable.herokuapp.com/api/restaurants?city=${data.payload}`)
        .then(response => response.json())
    yield put(updateRestaurantList(restaurants))
}
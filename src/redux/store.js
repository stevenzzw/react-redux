import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'
import personReducer from './person_reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const allReducers = combineReducers({
    sum:countReducer,
    person:personReducer
})


export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))


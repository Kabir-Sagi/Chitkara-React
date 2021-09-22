import {createStore,combineReducers,applyMiddleware} from 'redux'
import myReducer from '../Reducers/MyReducer'
import ReduxLogger from 'redux-logger'
const cr= combineReducers({pizzaReducer:myReducer})


 const store = createStore(cr,applyMiddleware(ReduxLogger))

 export default store
import {createStore, compose} from 'redux'
import {combineReducers} from 'redux'
import {applyMiddleware} from 'redux'
import Middleware from 'redux-thunk'
import {authReducer} from "./auth-reducer"
import appReducer from "./app-reducer"
import {playersReducer} from "./players-reducer"
import {lotsReducer} from "./lots-reducer"
import {regReducer} from "./reg-reducer"
import {profileReducer} from "./profile-reducer";
//import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers(
    {
        app: appReducer,
        auth: authReducer,
        players: playersReducer,
        lots: lotsReducer,
        reg: regReducer,
        profile: profileReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(Middleware)));

window.getStore = () => {
    console.log(store.getState())
}

export default store;
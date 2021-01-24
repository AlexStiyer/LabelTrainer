import {createStore} from "redux";
import { labelReducer } from "../reducers/LabelReducer"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    labelReducer: labelReducer
});

const store = createStore(
    rootReducer
)

export default store;
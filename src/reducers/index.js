import { combineReducers } from "redux";

import citasReducers from "./citasReducers";
import validacionReducers from "./validacionReducers";

export default combineReducers({
    citas: citasReducers,
    error: validacionReducers
});


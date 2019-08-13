import { createStore } from "redux";
import reducer from "./reducers/index";
import {obtenerStateStorage, guardarStateStorage} from './localStorage'

// definir el state inicial
// const initialState = [];

// Obtener citas del localStorage
const storageState = obtenerStateStorage();

const store = createStore(
    reducer,
    //initialState,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    guardarStateStorage({
        citas : store.getState().citas
    })
} )

export default store;

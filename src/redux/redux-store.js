import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let Reducers = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(Reducers);

export default store;
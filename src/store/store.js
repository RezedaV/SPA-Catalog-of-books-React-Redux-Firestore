import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {bookReducer} from "./book/reduser";


const rootReducer = combineReducers({
    books: bookReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'gbMessenger',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export  const persistor = persistStore(store);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./Redux/CartSlice";


const persostConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};
const rootReducer = combineReducers({
    cart: cartReducer,
});

const persistedReducer = persistReducer(persostConfig, rootReducer);


export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getdefaultMiddleware) => {
        serialisableCheck: {
            ignoredActions: [
                'FLUSH',
                'REHYDRATE',
                'PAUSE',
                'PERSIST',
                'PURGE',
                'REGISTER'
            ]
        }
    }
})
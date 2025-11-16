import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./Redux/CartSlice"; // Assuming this path is correct

// --- Redux-Persist Configuration ---
const persistConfig = { // Corrected typo: persostConfig -> persistConfig
    key: 'root',
    storage,
    whitelist: ['cart']
};

// --- Root Reducer ---
const rootReducer = combineReducers({
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// --- Store Configuration ---
export const Store = configureStore({
    reducer: persistedReducer,
    // Fix the middleware configuration syntax
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: { // Corrected typo: serialisableCheck -> serializableCheck
            ignoredActions: [
                'FLUSH',
                'REHYDRATE',
                'PAUSE',
                'PERSIST',
                'PURGE',
                'REGISTER'
            ],
        },
    }),
});


export const persistor = persistStore(Store);
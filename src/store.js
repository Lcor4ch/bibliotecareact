import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage'

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
    whitelist:['lista']}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(persistedReducer, composedEnhancer)
const persistor = persistStore(store);
export {store,persistor}
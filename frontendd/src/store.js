import {configureStore} from '@reduxjs/toolkit'
// import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/rootReducers'


// const persistConfig={
//     key:'main-root',
//     storage,
// }

// const persistedReducer=persistReducer(persistConfig,rootReducer)


const store=configureStore(
    {
    reducer:{
        // store:persistedReducer
        store:rootReducer
    },
    // middleware:(getDefaultMiddleware)=>
    // getDefaultMiddleware({
    //     serializableCheck:{
    //         ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    //     }
    // })
},
)

// const Persistor=persistStore(store)

// export {Persistor}
export default store
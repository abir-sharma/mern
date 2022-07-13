import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import store,{Persistor} from "./store"
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {ContextProvider} from "./context/Context"



ReactDOM.render(
  <Router>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={Persistor} > */}
    <ContextProvider>
    <App />
    </ContextProvider>
    {/* </PersistGate> */}
    </Provider>
    </Router>
    ,
  document.getElementById('root')
)

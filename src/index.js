import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'


import reducer from './reducers'


import MainInvoice from './containers/MainInvoice'
import App from './containers/App'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PerNavbar from './components/PerNavbar'

import Invoice from './components/Invoice'

import Character from './components/Character'

import Favorites from './components/Favorites'



import Newproducts from './components/newProducts/newProducts'

import {PersistGate} from 'redux-persist/lib/integration/react';


import storage from 'redux-persist/lib/storage/session';

import {persistStore, persistReducer} from 'redux-persist';



import '../src/style.scss';
import './Sass/App.scss'
import MainFinal from './containers/MainFinal'
import MainUser from './containers/MainUser'


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const persistConfig = {
  key: 'root',
  storage
}


const myPersistReducer = persistReducer(persistConfig, reducer);

const store3 = createStore(
  myPersistReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)


const persistor3 = persistStore(store3)


//<PersistGate loading={null} persistor={persistor3}>
//</PersistGate>


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store3}>
    <PersistGate loading={null} persistor={persistor3}>
      <PerNavbar/>
      <Routes>
        <Route path="/Front_FerreteriaSofka/home" exact element={<><h1>SISTEMA MANEJO DE INVENTARIOS, BIENVENIDO USUARIO</h1></>}/>
        <Route path="/Front_FerreteriaSofka/all" exact element={<><App/></>}/>
        <Route path="/Front_FerreteriaSofka/entradaProducto" exact element={<><MainInvoice/></>}/>
        <Route path="/Front_FerreteriaSofka/crearUsuario" exact element={<><MainUser/></>}/>
        
        <Route path="/Front_FerreteriaSofka/factura" exact  element={<><MainFinal/></>}/>
        
      </Routes>
      </PersistGate>

    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

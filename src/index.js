import React from 'react';
import { render } from 'react-dom'
//import { Provider } from 'react-redux'
//import { createStore, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk';
//import reducer from './reducers'
import UserData from './component/UserData';

//let store = createStore(reducer,  applyMiddleware(thunk))

render(
   // <Provider store={store}>
        <UserData />
   // </Provider>
    , document.getElementById('root') 
);
 
import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
 

//This <BrowserRouter> Component grabs History object in browsers and passes 
//it down to the component tree. 
//so anywhere in our component tree we will be able to use history object 
 
ReactDOM.render(
    <BrowserRouter>
       <App />
   </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorldApApp from './HelloWorldApp'
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './styles.css'

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApApp/> */}
        {/* <FirstApp title='Hola, soy Natalia'/> */}
        <CounterApp value={10}/>
    </React.StrictMode>
)
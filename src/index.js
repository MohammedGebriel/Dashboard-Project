import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './app.css'
import {DarkModeContextProvider} from './Components/context/DarkModeContext'

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode >
        <DarkModeContextProvider >

        <App />
        </DarkModeContextProvider>
    </React.StrictMode>
)
import './bootstrap';
import '../css/app.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import router from './hooks/router';
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from './context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
);

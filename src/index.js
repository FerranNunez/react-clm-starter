import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider as StateProvider } from "react-redux";

import reportWebVitals from './reportWebVitals';

import routes from './config/routes';
import store from './config/store';
import content from './config/content';

import PopupProvider from "./providers/PopupProvider";
import StaticDataProvider from "./providers/StaticDataProvider";

import './index.css';

const router = createHashRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <StaticDataProvider data={content}>
            <StateProvider store={store}>
                <PopupProvider>
                    <RouterProvider router={router} />
                </PopupProvider>
            </StateProvider>
        </StaticDataProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, useParams} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter  >
    </Provider>
)
;

reportWebVitals();

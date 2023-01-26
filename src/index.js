import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import { HashRouter } from "react-router-dom";
import RouterApp from './Components/RouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <RouterApp />
  </HashRouter>
  // </React.StrictMode>
);

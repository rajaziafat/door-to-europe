import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TagManager from "react-gtm-module";
import { GTM_ID } from './utils/CONSTS.ts';

const tagManagerArgs = {
  gtmId: GTM_ID,
};

  TagManager.initialize(tagManagerArgs);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

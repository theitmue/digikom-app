import React from 'react';
import ReactDOM from 'react-dom';
//import Box from '@mui/material/Box';

//import './index.css';
import './style.css';

import Kompass from './Kompass';
import reportWebVitals from './reportWebVitals';

//ANPASSUNG
/*Hier die Adressen des Backends sowie des Impressums bzw. der Kontaktwebseite eintragen*/

const backendAdress="https://digikom-backend.herokuapp.com";
const impressumAdress = "https://omen.cs.uni-magdeburg.de/itiamsl/deutsch/home/index.html";
const version = "b1.0.2"

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Kompass server= {backendAdress} impressum={impressumAdress} version={version}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

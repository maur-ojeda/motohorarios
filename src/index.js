import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';
import Bloquehorario from './components/bloquehorario';


ReactDOM.render(<React.StrictMode >

<App />

<Bloquehorario />

</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
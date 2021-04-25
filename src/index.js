import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import './App.scss'
import Navbar from './components/navbar/Navbar';
import Bloquehorario from './components/bloquehorario/Bloquehorario';

import reportWebVitals from './reportWebVitals';



ReactDOM.render(<React.StrictMode >

<Navbar />


<div className="columns">
  <div className="column is-full">
  <Bloquehorario />
  </div>
</div>





</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
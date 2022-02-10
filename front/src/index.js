import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

axios.get('http://localhost:5000/')
    .then(res => {
      console.log(res)
      document.getElementById('page-count').innerText = res.data.pageCount
    })
    .catch(err => console.log(err))

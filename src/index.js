import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/coin/:id" component={App} element={<App />}/>
        <Route path='*' element={<Error error="Coin Template ID was not provided." />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

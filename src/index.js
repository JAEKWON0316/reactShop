import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap을 평상시에 쓰는 방식대로 쓸 수 있게 해준다.
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecyclePedia} from './components/RecyclePedia'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <RecyclePedia />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


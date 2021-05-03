import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecyclePedia} from './components/RecyclePedia'

//entry file that runs the main component
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <RecyclePedia />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


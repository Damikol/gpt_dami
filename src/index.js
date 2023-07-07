import React from 'react' ;
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'

import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />)

//The ones commented out are  ReactDOM.render that is no longer supported in React 18.
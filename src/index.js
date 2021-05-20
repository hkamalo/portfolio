import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation, Route, Screen, Link, glide } from 'react-tiger-transition';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

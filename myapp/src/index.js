import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
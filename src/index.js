import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navigation/navBar';
import Home from './components/pages/home';
import routes from './components/pages/navigation/routes';
import '../style/main.scss';

export default function App () {
  const routeResult = useRoutes(routes);
}
    return (
      <div className='app'>
        <NavBar />
        {routeResult}
      </div>
    );
  


ReactDOM.render(
  <App />
  , document.querySelector('.app-wrapper'));
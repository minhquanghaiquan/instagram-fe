import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import Login from './pages/Login';
import Logup from './pages/Logup';



const Authentication = () => {
    const match = useRouteMatch();
   
    return (
    <Switch>
      <Route path={`${match.url}/login`} component={Login} />
      <Route path={`${match.url}/logup`} component={Logup} />

      <Route component={NotFound} />
    </Switch>
    );
};


Authentication.propTypes = {

};


export default Authentication;

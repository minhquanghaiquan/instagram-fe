import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from 'features/Home';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { logIn } from 'features/Authentication/authSlice';

const Authentication = React.lazy(() => import('./features/Authentication'));

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    const checkloggeIn = async () => {
      let token = localStorage.getItem('auth-token');
      if(token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await axios.post( 
        'http://localhost:8080/api/user/tokenIsValid', 
          null , {headers: {'auth-token' : token}}
      );
      if(tokenRes.data) {
        const userRes = await axios.get('http://localhost:8080/api/user',
        {headers: {'auth-token' : token}}
        );

        dispatch(logIn(
          {
            token,
            user: userRes.data
          }
        ));
      }
    }
    checkloggeIn();
  });
  
  return (
    <div className="instagram">
       <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
            <Header/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Authentication} />
              <Route component={NotFound} />
            </Switch>
            
          </BrowserRouter>
        </Suspense>
    </div>
  );
}

export default App;
import React, {useState, useEffect} from 'react';
import { UserContext } from '../../contexts/userContext.js';
import './App.css';

import LoginPage from '../../pages/LoginPage.js';
import HomePage from '../../pages/HomePage.js';
import { logoutUser } from '../../api/auth.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";
import Navbar from '../Navbar/Navbar.js';


function App() {
  const [user, setUser] = useState(null);
  const isUserLoggedIn = () => {
    return !!user;
  }
  const logout = (event) => {
    event.preventDefault();
    logoutUser();
    setUser(null);
  }

  // const history = useHistory();
  // console.log(history)

  // useParams
//   useEffect(() => {
//   if (!isUserLoggedIn()) {
//     history.push('/login');
//   }
// }, [user, history]);
  
  /* referring to <UserContext.Provider value={{user, setUser, isUserLoggedIn}}> and other instances.
  * since the values are stored as variables in context, it's not necessary to escape the values for XSS-sake.
  */
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser, isUserLoggedIn}}>
        <Navbar />
        <Router>
          <Switch>
              <Route exact path="/login">
                <LoginPage/>
              </Route>
              <Route exact path="/">
                <HomePage/>
              </Route>
            </Switch>
        </Router>

      </UserContext.Provider>
    </div>
  );
}

export default App;
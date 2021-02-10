import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './config/redux';
import UserService from './services/userService';

// pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.authReducer);
  console.log(auth);
  // (async function(){
  //   const check = await UserService.checkLogin();
  //   console.log(check);
  //   if(check.code === 401){
  //     // localStorage.removeItem("user");
  //   }
    
  // })()

  return (
    <Route {...rest} render={(props) => (auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
  )
}

export default App;

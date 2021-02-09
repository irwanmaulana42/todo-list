import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { Provider } from 'react-redux';
import { store } from './config/redux';

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
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Login from './components/auth/login';
import Register from './components/auth/Register';
import 'semantic-ui-css/semantic.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
import firebase from 'firebase';


import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer';
import { setUser } from './actions';
const store = createStore(rootReducer,composeWithDevTools());


class Root extends React.Component{

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        console.log(user);
        this.props.setUser(user);
        this.props.history.push("/");
      }
    });
  }
  render(){
    return (
      
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      
    )
    
  }
} 

const RootwithAuth = withRouter(connect(null, {setUser})(Root));
ReactDOM.render(
<Provider store={store}>
  <Router>
    <RootwithAuth />
  </Router>
</Provider>,
    document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Login from './components/auth/login';
import Register from './components/auth/Register';
import 'semantic-ui-css/semantic.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
import firebase from 'firebase';

import Spinner from './spinner';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer';
import { setUser, clearUser } from './actions';
const store = createStore(rootReducer,composeWithDevTools());


class Root extends React.Component{

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.setUser(user);
        this.props.history.push("/");
      }else{
        this.props.history.push('/login');
        this.props.clearUser();
      }
    });
  }
  render(){
    return this.props.isLoading ? <Spinner/> : (
      
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      
    )
    
  }
} 

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
});

const RootwithAuth = withRouter(connect(mapStateFromProps, {setUser, clearUser})(Root));
ReactDOM.render(
<Provider store={store}>
  <Router>
    <RootwithAuth />
  </Router>
</Provider>,
    document.getElementById('root'));


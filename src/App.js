import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {FirebaseAuthContext} from './firebase/auth';
import {signInWithEmailAndPassword , signOut, signInWithPopupGoogle} from './firebase/functions';
import {Switch, Route} from 'react-router-dom'

const isAuth = (auth) => auth.isUserSignedIn === true;

const home = (props) => <p>Please sign in</p>;
const profile = (props) => <p>Authenticated</p>;

const routes = (auth) => {
  const comp = isAuth(auth) ? profile : home;
  return (
    <Switch>
      <Route exact path='/' component={comp}/>
    </Switch>
  )
}

class App extends Component {

  signOut = () => signOut().then((d) => console.log(d)).catch((d) => console.log('logout'));

  signInWithEmailAndPassword = () => signInWithEmailAndPassword('test@test.com', '123456').then((data) => console.log("log in", data));
  
  signInWithPopupGoogle = () => signInWithPopupGoogle().then((d) => console.log("google sign in", d))
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <button onClick={this.signInWithEmailAndPassword}>Sign in</button>
          <button onClick={this.signInWithPopupGoogle}>Sign in with Goggle</button>
          <button onClick={this.signOut}>Sign Out</button>
        </div>
        <div>
          <FirebaseAuthContext.Consumer>
            {auth => routes(auth)}
          </FirebaseAuthContext.Consumer>
        </div>
      </div>
    );
  }
}

export default App;

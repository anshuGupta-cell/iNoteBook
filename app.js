import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

const { BrowserRouter, Route, Switch }= window.ReactRouterDOM;

class Main extends React.Component {
    render() {
        return (
            
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signUp' component={SignUp} />
        <Route path='*'>
          <h2>404 - Not Found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-app')
);

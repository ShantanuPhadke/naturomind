import React from 'react';
import './App.css';
import Home from './views/Home/Home';
import HowItHelps from './views/HowItHelps/HowItHelps';
import Blog from './views/Blog/Blog';
import Blog2 from './views/Blog/Blog2';
import Blog3 from './views/Blog/Blog3';

// React Bootstrap related imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router related imports
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App">
        <Navbar className={'navbar'} style={{position:'fixed', top:0, width:'100%'}}>
          <Navbar.Brand href="/#/home" style={{color:'#57a99a'}}>Naturomind</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/#/home">Home</Nav.Link>
            <Nav.Link href='/#/how-it-helps'>How It Helps</Nav.Link>
            <Nav.Link href='/#/blog/1'>Blog</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/how-it-helps">
            <HowItHelps />
          </Route>
          <Route path='/blog/1'>
            <Blog />
          </Route>
          <Route path='/blog/2'>
            <Blog2 />
          </Route>
          <Route path='/blog/3'>
            <Blog3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

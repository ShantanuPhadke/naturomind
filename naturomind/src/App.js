import React from 'react';
import './App.css';
import Home from './views/Home/Home';
import Treatments from './views/Treatments/Treatments';
import Recipes from './views/Recipes/Recipes';
import Contact from './views/Contact/Contact';
import PhotoGallery from './views/PhotoGallery/PhotoGallery';
import Videos from './views/Videos/Videos';

// React Bootstrap related imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router related imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className={'navbar'} bg="dark" variant="dark">
          <Navbar.Brand href="/home">Naturomind</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
              { /*<Link to="/home">
                Home
                </Link>*/ }
            <Nav.Link href="/treatments">Treatments</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/treatments">
            <Treatments />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/photo-gallery">
            <PhotoGallery />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

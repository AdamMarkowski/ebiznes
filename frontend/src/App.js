import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import './styles.css';
import Users from './Users.js'
import Layout from './Layout.js'
import Home from './Home.js'
import Categories from './Categories.js'
import Manufacturers from './Manufacturers.js'
import Payments from './Payments'
import Product from './Product'

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
           <Route path="/categories">
            <Categories />
          </Route>
           <Route path="/manufacturers">
            <Manufacturers />
          </Route>
           <Route path="/payments">
            <Payments />
          </Route>
           <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

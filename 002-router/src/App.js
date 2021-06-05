import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Users from './github/Users';
import User from './github/User';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;

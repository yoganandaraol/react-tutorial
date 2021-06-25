import './App.css';

import UserContainer from './components/UserContainer'
import ToDoContainer from './components/ToDoContainer';
import { Provider } from 'react-redux'
import store from './redux/store'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>

        <Route path="/" exact component={ToDoContainer} />
        <Route path="/users" exact component={UserContainer} />
        </Router>
          
        
      </div>
    </Provider>
  );
}

export default App;

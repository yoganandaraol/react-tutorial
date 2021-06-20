import './App.css';
import TaskContainer from './components/TaskContainer'
import HooksTaskContainer from './components/HooksTaskContainer'
import ReminderContainer from './components/ReminderContainer'
import SuperTaskContainer from './components/SuperTaskContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <ItemContainer />
          <ItemContainer task />

          <HooksTaskContainer />
          <hr />
          <TaskContainer />
          <hr />
          <SuperTaskContainer />
          <hr />
          <ReminderContainer />
          <hr />
          <UserContainer />
      </div>
    </Provider>
  );
}

export default App;

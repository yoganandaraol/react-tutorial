import './App.css';
import HookUseState from './Components/hook-useState';
import HookUseEffect from './Components/hook-useEffect';
import HookUseMemo from './Components/hook-useMemo';
import HookUseRef from './Components/hook-useRef';
import HookUseContext from './Components/hook-useContext';
import HookUseReducer from './Components/hook-useReducer';
import HookUseReducerTodos from './Components/hook-useReducerTodos';

function App() {
  return (
    <div className="App">
      <HookUseReducer />
      <HookUseReducerTodos />
      <HookUseContext />
      <HookUseRef />
      <HookUseMemo />
      <HookUseEffect />
      <HookUseState />
    </div>
  );
}

export default App;

import './App.css';
import HookUseState from './Components/hook-useState';
import HookUseEffect from './Components/hook-useEffect';
import HookUseMemo from './Components/hook-useMemo';
import HookUseRef from './Components/hook-useRef';
import HookUseContext from './Components/hook-useContext';

function App() {
  return (
    <div className="App">
      <HookUseContext />
      <HookUseRef />
      <HookUseMemo />
      <HookUseEffect />
      <HookUseState />
    </div>
  );
}

export default App;

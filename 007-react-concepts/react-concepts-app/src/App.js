import './App.css';
import HookUseState from './Components/hook-useState';
import HookUseEffect from './Components/hook-useEffect';
import HookUseMemo from './Components/hook-useMemo';

function App() {
  return (
    <div className="App">
      <HookUseMemo />
      <HookUseEffect />
      <HookUseState />
    </div>
  );
}

export default App;

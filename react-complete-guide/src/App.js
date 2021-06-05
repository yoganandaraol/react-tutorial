import Users from './users/Users';
import Events from './eventandbinding/Events';
import './App.css';

function SayHello(){
  return <div><hr /><h2>Say Hello</h2></div>
}

function App() {
  return (
   <div className="App">
      
     
     <Users  />
     <SayHello /> 
    
    <hr />
     <Events />
   </div>
  );
}

export default App;

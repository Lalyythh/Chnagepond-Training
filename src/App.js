import './App.css';
import FunctionComp from './component/FunctionComp';
import ClassComp from './component/ClassComp';
import StateComp from './component/StateComp';
import MethodEventComp from './component/MethodEventComp';
import ParentComp from './component/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> 
      <h1>Welcome You all in react session</h1>
      <FunctionComp uname="Lalith" upost="Engineer"/>
      <ClassComp ename="Stephan" epost="Student"/>
      <StateComp/>
      <MethodEventComp/> */}
      <ParentComp/>
    </div>
  );
}

export default App;

import './App.css';
import FunctionComp from './component/FunctionComp';
import ClassComp from './component/ClassComp';
import StateComp from './component/StateComp';
import MethodEventComp from './component/MethodEventComp';
import ParentComp from './component/ParentComp';
import MyImagesComp from './component/MyImagesComp';
import LalithComp from './Task/Task1/LalithComp';
import FriendComp from './Task/Task2/FriendComp';
import CounterComp from './Task/Task3/CounterComp';
import ToggleImage from './Task/Task4/ToggleImage';
import ChangeImage from './Task/Task5/ChangeImages';
import ClickCounterComp from './component/ClickCounterComp';
import HoverCounterComp from './component/HoverCounterComp';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> 
      <h1>Welcome You all in react session</h1>
      <FunctionComp uname="Lalith" upost="Engineer"/>
      <ClassComp ename="Stephan" epost="Student"/>
      <StateComp/>
      <MethodEventComp/> 
      <ParentComp/> 
      <MyImagesComp/> 
      //Task1: <LalithComp fname="Lalith" lname="Kishore" email="lalith.kishore@changepond.com" contact="9884545966" city="Guduvancherry"/>
      //Task2: <FriendComp fname="Lalith" lname="Kishore" email="lalith.kishore@changepond.com" contact="9884545966" city="Guduvancherry"/>
      //Task3: <CounterComp/>
      //Task4: <ToggleImage/>
      //Task5: <ChangeImage/> */}

      <ClickCounterComp/>
      <HoverCounterComp/>


    </div>
  );
}

export default App;

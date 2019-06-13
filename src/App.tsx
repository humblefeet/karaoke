import React from 'react';
import './App.css';
import MyClass from './components/MyClass'
import MyComp from './components/MyComp'

const App: React.FC = () => {
  return (
    <div className="App">
      <MyClass name={"Jack"} isMarried={false}/>
      <MyComp name={"Jill"} isMarried={true} kids={4}/>
    </div>
  );
}

export default App;

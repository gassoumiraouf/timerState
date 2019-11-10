import React from 'react';
import './App.css';
import Timer from './timer'

const milliseconds = 54536725
function App() {
  return (
    <div className="App">
      <Timer milliseconds={milliseconds}/>
    
    </div>
  );
}

export default App;

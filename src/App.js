import React from 'react';
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar.js';
import Widget from './Components/Widget.js';
import Data from './Components/Data.js';
import './App.css';

function App() {
  return (
    <div className="App">
         <Header/>
       <div className='App_Body'>
       <Sidebar/>
       <Data/>
       
       </div>


    </div>
  );
}

export default App;

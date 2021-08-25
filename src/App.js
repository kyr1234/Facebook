import React from 'react';
import Header from './Components/Header/Header.js';
import Sidebar from './Components/App_Body/Sidebar/Sidebar.js';
import Widget from './Components/App_Body/Widgets/Widget.js';
import Data from './Components/App_Body/Data/Data.js';
import './App.css';

function App() {
  return (
    <div className="App">
         <Header/>
       <div className='App_Body'>
       <Sidebar/>
       
       
       </div>


    </div>
  );
}

export default App;

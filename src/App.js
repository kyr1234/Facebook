import React from 'react';
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar.js';
import Widget from './Components/Widget.js';
import Data from './Components/Data.js';
import './App.css';
import Login from './Components/Login';

function App() {

  const user=null
  return (
    <div className="App">
{!user ?(
  <Login/>
): (
   <>
       <Header/>
       <div className='App_Body'>
       <Sidebar/>
       <Data/>
       <Widget/>
       </div>
  </>
)}
</div>
  );
}

export default App;

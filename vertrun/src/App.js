import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Activities from './pages/Activities/Activities';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <input type='range' onChange={(e)=>{console.dir(e.target.valueAsNumber)}}/> */}
      <Routes>
        <Route
          path='/'
          element={<Activities/>}
        />
        {/* <Route
          path='movies/:title/:id'
          element={<DetailedMovie/>}
        /> */}
      </Routes>
    </div>
  );
}

export default App;

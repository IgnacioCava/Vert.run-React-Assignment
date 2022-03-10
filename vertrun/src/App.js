import './App.css';
import React, { useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Activities from './pages/Activities/Activities';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import MonthlyStats from './pages/MonthlyStats/MonthlyStats';
import scrollHandler from './helpers/autoScroll';
import distance from './assets/distance.png'
import {useDispatch, useSelector} from 'react-redux'
import { getUserData } from './Redux/actions';

function App() {

  // If you were to resize a page while some sort of autoscrolling is going on (e.g ScrollTo, ScrollBy),
  // the scrolling would stop. This eventListener makes sure the scrolling function actually
  // reaches it's destination
  window.addEventListener('resize',()=>{
    setTimeout(()=>scrollHandler(), 200)
    
  })

//Mock data

//   let stats=[
//     {
//         type:'distance',
//         image:distance,
//         amount:'12km',
//         low:"12m",
//         high:"2km"
//     },
//     {
//         type:'height',
//         image:distance,
//         amount:'12km',
//         low:"2m",
//         high:"3km"
//     },
//     {
//         type:'height',
//         image:distance,
//         amount:'12km',
//         low:"2m",
//         high:"3km"
//     },
//     {
//         type:'height',
//         image:distance,
//         amount:'12km',
//         low:"2m",
//         high:"3km"
//     }
// ]
//   let actData=[{
//   type:"Run",
//   duration: '12s',
//   title: "xdddd",
//   timezone: "2018/05/02 | 05:15:09 (Los Angeles, GMT-8)",
//   stats
//   },{
//   type:"Ride",
//   duration: '3m',
//   title: "xasddddd",
//   timezone: "2018/05/02 | 05:15:09 (Los Angeles, GMT-8)",
//   stats
//   },{
//   type:"Swim",
//   duration: '16hr',
//   title: "hola",
//   timezone: "2018/05/02 | 05:15:09 (Los Angeles, GMT-8)",
//   stats
//   },{
//   type:"Run",
//   duration: '1d',
//   title: "10102120",
//   timezone: "2018/05/02 | 05:15:09 (Los Angeles, GMT-8)",
//   stats
//   },{
//   type:"Whatever",
//   duration: '3d',
//   title: "oof",
//   timezone: "2018/05/02 | 05:15:09 (Los Angeles, GMT-8)",
//   stats
//   }]

  return (
    <div className="App">
      <Sidebar/>
      <Sectors id='sectors'>
      <Activities/>
      <MonthlyStats/>
      </Sectors>
    </div>
  );
}

const Sectors = styled.div`
overflow:hidden ;
width:80% ;
height:100% ;
scroll-behavior: smooth;
background: linear-gradient(180deg,#007BD3 0%,rgba(0,123,211,0.31) 100%);
@media (max-width:1000px) {
  width: 100%;
}
`

export default App;

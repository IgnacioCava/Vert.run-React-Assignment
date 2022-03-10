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

  const dispatch = useDispatch()

  const user = useSelector(state=>state.user)

  useEffect(()=>{
      dispatch(getUserData())
  },[])


 if(user){
  return (
    <div className="App">
      
      <Sidebar/>
      <Sectors id='sectors'>
      <Activities/>
      <MonthlyStats/>
      </Sectors>
    </div>
  )} else return null;
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

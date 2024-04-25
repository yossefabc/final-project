import UserProfile from './Components/UserProfile'
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Route,Link,  Routes } from 'react-router-dom';

import ExerciseRecommendation from './Components/ExerciseRecommendation';
import ProgressTracker from './Components/ProgressTracker';
import NutritionSection from './Components/NutritionSection';
import WorkoutPlans from './Components/WorkoutPlans';

import {faChartColumn} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatComponent from './Components/ChatComponent';

function App() {
  

  return (
    
    <>
   
        
        
     <nav className='firstnav'>
      <h1 style={{paddingRight:"30px",color:"red"}}> <FontAwesomeIcon icon={faChartColumn}  style={{paddingRight:"30px"}}/>GYMTRACK</h1>
    
      <ul >
          <li  style={{paddingRight:"7vh"}}>
              <Link to="/home" >Home</Link>
            </li>
            <li style={{paddingRight:"7vh"}}>
              <Link to="/exercise">exercise Recommendations</Link>
            </li>
            <li style={{paddingRight:"7vh"}}>
              <Link to="/progresstracker">ProgressTracker</Link>
            </li>
            <li style={{paddingRight:"7vh"}}>
              <Link to="/nutritionSection">NutritionSection</Link>
            </li>
            <li >
              <Link to="/workoutPlans">WorkoutPlans</Link>
            </li>
          </ul>
          
     
     </nav>
  
    
      <div className='head'>
     
       <Routes>
          
          <Route path='/home' element={<Home/>} />
          <Route path="/exercise" element={<ExerciseRecommendation/>} />
          <Route path='/progresstracker' element={<ProgressTracker/>} />
          <Route path='/nutritionSection' element={<NutritionSection/>} />
          <Route path='/workoutPlans' element={<WorkoutPlans/>} />
          </Routes>
      </div>


      
      

    </>
    
  );
}

export default App

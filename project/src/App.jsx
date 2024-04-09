import UserProfile from './Components/UserProfile'
import './App.css'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import React from 'react';
import { BrowserRouter as Router, Route,  Link, Routes } from 'react-router-dom';
import ExerciseRecommendation from './Components/ExerciseRecommendation';
import ProgressTracker from './Components/ProgressTracker';
import NutritionSection from './Components/NutritionSection';
import WorkoutPlans from './Components/WorkoutPlans';
import{faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTiktok} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  

  return (
    <>
     
    
      <div className='head'>
      <h1>Fitness Tracking Application </h1>
        <nav>
          <ul >
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/exercise">exercise Recommendations</Link>
            </li>
            <li>
              <Link to="/progresstracker">ProgressTracker</Link>
            </li>
            <li>
              <Link to="/nutritionSection">NutritionSection</Link>
            </li>
            <li>
              <Link to="/workoutPlans">WorkoutPlans</Link>
            </li>
          </ul>
        </nav>
       <Routes>
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/exercise' element={<ExerciseRecommendation/>} />
          <Route path='/progresstracker' element={<ProgressTracker/>} />
          <Route path='/nutritionSection' element={<NutritionSection/>} />
          <Route path='/workoutPlans' element={<WorkoutPlans/>} />
          </Routes>
      </div>

      <div className='body'>
      <h1 >Take a tour </h1>
        <h2 >Track Your Gym and Cardio Workouts</h2>
        <h2 >this site is a workout tracking tool that helps you track your gym and cardio workouts,<br></br>
        It's really easy. You can also track your bodyweight and add notes on both gym and cardio workouts
        </h2>
      </div>

      <div className='second'>
        <h1>Create Workout Plans</h1>
        <h2>With us you can create your own workout plans.<br></br>
        or choose a workout plan we made for you based on your height,weight and age</h2>
      </div>
      <div className='third'>
        <h1>Nutrition</h1>
        <h2>its well known that Nutrition is a major key to your goal, <br></br>and that why we creat a page that describe exactly what do you need to eat and when</h2>
      </div>

      

      <div class="fontawesome" >
             <a href="https://www.facebook.com">  <FontAwesomeIcon icon={faFacebook}/></a>
              <a href="//www.instagram.com/"> <FontAwesomeIcon icon= {faInstagram} /></a>
              <a href="https://www.tiktok.com/explore">  <FontAwesomeIcon icon= {faTiktok} /></a>
          </div>
     

      
      
    
  
<script src="https://kit.fontawesome.com/6b35388671.js" crossorigin="anonymous"></script>
    </>
  )
}

export default App

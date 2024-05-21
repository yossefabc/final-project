
// import './App.css'
// import { useState } from 'react';
// import React from 'react';
// import { BrowserRouter as Router, Route,Link,  Routes } from 'react-router-dom';

// import ExerciseRecommendation from './Components/ExerciseRecommendation';
// import ProgressTracker from './Components/ProgressTracker';
// import NutritionSection from './Components/NutritionSection';
// import WorkoutPlans from './Components/WorkoutPlans';

// import {faChartColumn} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Home from './Components/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
  

//   const [userId, setUserId] = useState(''); // Initialize userId state

//   // Function to handle userId changes
//   const handleUserIdChange = (event) => {
//     setUserId(event.target.value); // Update userId state when input changes
//   };
//   return(
//     <>
    
 
 
 
 
        
        
//      <nav className='firstnav'>
//       <h1 style={{paddingRight:"3vh",color:"red"}}> <FontAwesomeIcon icon={faChartColumn}  style={{paddingRight:"3vh"}}/>GYMTRACK</h1>
    
//       <ul >
//           <li  style={{paddingRight:"7vh"}}>
//               <Link to="/home" >Home</Link>
//             </li>
//             <li style={{paddingRight:"7vh"}}>
//               <Link to="/exercise">exercise Recommendations</Link>
//             </li>
//             <li style={{paddingRight:"7vh"}}>
//               <Link to="/progresstracker">ProgressTracker</Link>
//             </li>
//             <li style={{paddingRight:"7vh"}}>
//               <Link to="/nutritionSection">NutritionSection</Link>
//             </li>
//             <li >
//               <Link to="/workoutPlans">WorkoutPlans</Link>
//             </li>
//           </ul>
          
     
//      </nav>
  
    
//       <div className='head'>
     
//        <Routes>
          
//           <Route path='/home' element={<Home handleUserIdChange={handleUserIdChange}/>} />
//           <Route path="/exercise" element={<ExerciseRecommendation/>} />
//           <Route path='/progresstracker' element={<ProgressTracker userId={userId} />} />
//           <Route path='/nutritionSection' element={<NutritionSection userId={userId}/>} />
//           <Route path='/workoutPlans' element={<WorkoutPlans/>} />
//           </Routes>
//       </div>


      
      

//     </>
    
//   );
// }

// export default App









import './App.css'
import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import ExerciseRecommendation from './Components/ExerciseRecommendation';
import ProgressTracker from './Components/ProgressTracker';
import NutritionSection from './Components/NutritionSection';
import WorkoutPlans from './Components/WorkoutPlans';

import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <nav className='firstnav'>
        <h1 style={{ paddingRight: "3vh", color: "red" }}>
          <FontAwesomeIcon icon={faChartColumn} style={{ paddingRight: "3vh" }} />GYMTRACK
        </h1>
        <ul>
          <li style={{ paddingRight: "7vh" }}>
            <Link to="/home">Home</Link>
          </li>
          <li style={{ paddingRight: "7vh" }}>
            <Link to="/exercise">Exercise Recommendations</Link>
          </li>
          <li style={{ paddingRight: "7vh" }}>
            <Link to="/progresstracker">Progress Tracker</Link>
          </li>
          <li style={{ paddingRight: "7vh" }}>
            <Link to="/nutritionSection">Nutrition Section</Link>
          </li>
          <li>
            <Link to="/workoutPlans">Workout Plans</Link>
          </li>
        </ul>
      </nav>

      <div className='head'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/exercise" element={<ExerciseRecommendation />} />
          <Route path='/progresstracker' element={<ProgressTracker />} />
          <Route path='/nutritionSection' element={<NutritionSection />} />
          <Route path='/workoutPlans' element={<WorkoutPlans />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

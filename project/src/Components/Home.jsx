import React from "react";
import './Styling/Home.css';
import{faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTiktok} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import image from './Images/image.mp4';
import ExerciseRecommendation from "./ExerciseRecommendation";


function Home(){
    return(
        
        <div>
            <div className='main'>
        <video autoPlay loop muted id='video'>
         <source src={image} type='video/mp4'/>
        </video>
        </div>
        <div className="container">
        <div className='body' style={{color:"black"}}>
        <h1 >Take a tour </h1>
          <h2 >Track Your Gym and Cardio Workouts</h2>
          <h2 >this site is a workout tracking tool that <br></br>helps you track your gym and cardio workouts,<br></br>
          It's really easy. You can also track your bodyweight <br></br>and add notes on both gym and cardio workouts
          </h2>
        </div>
        <hr></hr>
        <div className='second'>
            <div>
          <h1><Link to="/workoutPlans">Create Workout Plans</Link> </h1>
          <h2>With us you can create your own workout plans.<br></br>
          or choose a workout plan we made for you<br></br> based on your height,weight and age</h2>
          </div>
          <img src="https://static.vecteezy.com/system/resources/previews/010/941/449/non_2x/workout-exercise-cartoon-icon-illustration-sport-healthy-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" height={"300px"}></img>
          
        </div>
        <hr></hr>
        <div className='third'>
            <div>
          <h1><Link to="/NutritionSection">Nutrition</Link></h1>
          <h2>its well known that Nutrition is a major key to your goal, <br></br>and that why we creat a page that describe exactly what do you need to eat and when</h2>
          </div>
          <img src="https://img.freepik.com/vecteurs-premium/conception-graphique-concept-infographique-macronutriments-nutrition-fibres-glucides-proteines-alimentaires_133260-5048.jpg?w=360" height={"300px"}></img>
        </div>
        <hr></hr>
        <div className="four">
            <h1>Features</h1>
            <h2>gymtrack is a workout tracking tool.<br></br> based on your height, weight and age 
                you can get the right exercise for your self

            </h2>
            
            <button>
                <Link to="/exercise">Learn more</Link>
                </button>
        </div>
        <hr></hr>
        
       <div className="footer">
        <div className="fontawesome" >
            <h1>social</h1>
               <a href="https://www.facebook.com">  <FontAwesomeIcon icon={faFacebook}/></a>
                <a href="//www.instagram.com/"> <FontAwesomeIcon icon= {faInstagram} /></a>
                <a href="https://www.tiktok.com/explore">  <FontAwesomeIcon icon= {faTiktok} /></a>
            </div>
            <div className="contact">
                <h1>contact</h1>
                <h3>E-mail</h3>
                <a href="">info@GYMTRACK.com</a>
            </div>
            </div>
       
            </div>
        
        
      
    
  <script src="https://kit.fontawesome.com/6b35388671.js" crossOrigin="anonymous"></script>
  </div>
    )
}

export default Home;
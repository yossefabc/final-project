import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExerciseRecommendation = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [exerciseRecommendations, setExerciseRecommendations] = useState([]);
  const [nutrition, setNutrition] = useState(null);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleExerciseRecommendation = async () => {
    try {
      const response = await axios.post('https://final-project-backend-0g8d.onrender.com/api/exercise', {
        weight: weight,
        height: height,
        age: age
      });

      const { nutrition } = response.data;
      setNutrition(nutrition);

      console.log(`Received data - Weight: ${weight}, Height: ${height}, Age: ${age}`);
      console.log('Nutrition:', nutrition);

      let recommendations = [];

      // Simplified logic for debugging
      if (age <= 30) {
        if (weight > 100 && weight <= 150 && height > 160 && height < 190) {
          recommendations = ['Low-intensity cardio', 'Walking', 'Swimming'];
        } else if (weight > 50 && weight <= 100 && height > 150 && height <= 180) {
          recommendations = ['Strength training', 'Cycling', 'Yoga'];
        } else {
          recommendations = ['High-intensity interval training (HIIT)', 'Running', 'CrossFit'];
        }
      } else {
        if (weight >= 100 && height >= 160) {
          recommendations = ['Low-intensity cardio', 'Walking', 'Swimming'];
        } else if (weight > 50 && weight < 100 && height <= 160) {
          recommendations = ['Light weight training', 'Stretching', 'Tai Chi'];
        } else {
          recommendations = ['Moderate-intensity cardio', 'Hiking', 'Pilates'];
        }
      }

      console.log('Exercise Recommendations:', recommendations);
      setExerciseRecommendations(recommendations);
    } catch (error) {
      console.error('Error fetching exercise recommendations:', error);
    }
  };

  return (
    <div>
      <h2>Exercise Recommendation</h2>
      <div>
        <label htmlFor="weightInput">Enter your weight (in kilograms):</label>
        <input
          type="number"
          id="weightInput"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div>
        <label htmlFor="heightInput">Enter your height (in centimeters):</label>
        <input
          type="number"
          id="heightInput"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div>
        <label htmlFor="ageInput">Enter your age:</label>
        <input
          type="number"
          id="ageInput"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <button onClick={handleExerciseRecommendation}>Get Exercise Recommendations</button>
      <div>
        <h3>Recommended Exercises:</h3>
        <ul>
          {exerciseRecommendations.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
      {nutrition && (
        <div>
          <h3>Nutritional Suggestions:</h3>
          <p>Calories: {nutrition.calories}</p>
          <p>Protein: {nutrition.protein}g</p>
          <p>Carbs: {nutrition.carbs}g</p>
          <p>Fat: {nutrition.fat}g</p>
        </div>
      )}
    </div>
  );
};

export default ExerciseRecommendation;





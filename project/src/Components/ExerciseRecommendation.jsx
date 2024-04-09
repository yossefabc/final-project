import React, { useState } from 'react';

const ExerciseRecommendation = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [exerciseRecommendations, setExerciseRecommendations] = useState([]);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleExerciseRecommendation = () => {
    // Define exercise recommendation logic based on weight, height, and age
    if (age <= 30) {
      // Consider age as a factor for intensity or type of exercise
      if (100<weight <= 150 && 160<height < 190) {
        setExerciseRecommendations(['Low-intensity cardio', 'Walking', 'Swimming']);
      } else if (50<weight <= 100 && 150<height <= 180) {
        setExerciseRecommendations(['Strength training', 'Cycling', 'Yoga']);
      } else {
        setExerciseRecommendations(['High-intensity interval training (HIIT)', 'Running', 'CrossFit']);
      }
    } else {
      // Adjust exercise recommendations for older individuals
      if (weight >= 100 && height >= 160) {
        setExerciseRecommendations(['Low-intensity cardio', 'Walking', 'Swimming']);
      } else if (50<weight < 100 && height <= 160) {
        setExerciseRecommendations(['Light weight training', 'Stretching', 'Tai Chi']);
      } else {
        setExerciseRecommendations(['Moderate-intensity cardio', 'Hiking', 'Pilates']);
      }
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
    </div>
  );
};

export default ExerciseRecommendation;

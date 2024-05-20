import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NutritionSection = ({ userId, weight, height, age }) => {
  const [nutrition, setNutrition] = useState(null);
  // State to manage loading state
  const [loading, setLoading] = useState(true); 
  // State to manage error state
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchNutrition = async () => {
      try {
        console.log('Fetching nutrition data for userId:', userId);
        const response = await axios.post('http://localhost:3000/api/exercise-recommendations', {
         userId,
          weight,
          height,
          age
        });
        console.log('Response data:', response.data);
        setNutrition(response.data.nutrition);
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
        setError(error); // Set the error state if there is an error
      } finally {
        setLoading(false); // Always set loading to false after the request completes
      }
    };

    if (userId) {
      fetchNutrition();
    } else {
      setLoading(false); // If no userId, set loading to false
    }
  }, [userId, weight, height, age]);

  if (loading) return <div>Loading...</div>; // Display loading message if still loading
  if (error) return <div>Error loading nutrition data: {error.message}</div>; // Display error message if there is an error

  if (!nutrition) return <div>No nutrition data available.</div>; // Display a message if no nutrition data

  return (
    <section>
      <h2>Nutritional Suggestions</h2>
      <p>Calories: {nutrition.calories}</p>
      <p>Protein: {nutrition.protein}g</p>
      <p>Carbs: {nutrition.carbs}g</p>
      <p>Fat: {nutrition.fat}g</p>
    </section>
  );
};

export default NutritionSection;








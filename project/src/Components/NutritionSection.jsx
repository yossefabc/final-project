

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NutritionSection = ({ weight, height, age }) => {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNutrition = async () => {
      try {
        const response = await axios.post('https://final-project-backend-0g8d.onrender.com/api/exercise', {
          weight,
          height,
          age
        });
        console.log('Response data:', response.data);
        setNutrition(response.data.nutrition);
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNutrition();
  }, [weight, height, age]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading nutrition data: {error.message}</div>;

  if (!nutrition) return <div>No nutrition data available.</div>;

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



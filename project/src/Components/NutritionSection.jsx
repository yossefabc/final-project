import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NutritionSection = ({ userId, weight, height, age }) => {
  const [nutrition, setNutrition] = useState(null);

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
        setNutrition(response.data.nutrition);
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
      }
    };

    if (userId) {
      fetchNutrition();
    }
  }, [userId, weight, height, age]);

  if (!nutrition) return <div>Loading...</div>;

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



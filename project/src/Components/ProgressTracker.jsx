

import React, { useState } from 'react';
import axios from 'axios';

const ProgressTracker = () => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [dietAdherence, setDietAdherence] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const payload = {
        date,
        weight,
        dietAdherence,
        notes
      };

      console.log('Sending payload:', payload);

      const response = await axios.post('https://final-project-backend-0g8d.onrender.com/api/progresstracker', payload);
      
      console.log('Server response:', response);

      setMessage('Progress saved successfully');
      setDate('');
      setWeight('');
      setDietAdherence('');
      setNotes('');
    } catch (error) {
      console.error('Error saving progress:', error);
      setMessage('Error saving progress');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Track Your Progress</h2>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dietAdherence">Did you follow the diet today?</label>
        <input
          type="text"
          id="dietAdherence"
          value={dietAdherence}
          onChange={(e) => setDietAdherence(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>Save Progress</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ProgressTracker;








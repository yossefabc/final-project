import React, { useState } from 'react';

function RegistrationForm() {
  // holds the form data entered by the user.
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: ''
  });
  // This function is called whenever there is a change in any of the input fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating form state: ${name} - ${value}`);
    setFormData({ ...formData, [name]: value });
  };
  // This function is called when the user submits the form.
  // and sends a POST request to the backend server using the fetch API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Submitting form data:", formData);
      const response = await fetch('https://final-project-backend-0g8d.onrender.com/exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle successful registration, e.g., redirect to another page
        console.log('Registration successful');
        window.location.href = '/';
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="first_name" value={formData.first_name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;


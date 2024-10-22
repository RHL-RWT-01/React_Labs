import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial form state with name, age, and hobbies
  const [form, setForm] = useState({
    name: '',
    age: '',
    hobbies: [''],
  });

  // Handle input change for basic fields (name, age)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle change for dynamic hobby fields
  const handleHobbyChange = (index, value) => {
    const updatedHobbies = [...form.hobbies];
    updatedHobbies[index] = value;
    setForm({ ...form, hobbies: updatedHobbies });
  };

  // Add new hobby input field
  const addHobby = () => {
    setForm({ ...form, hobbies: [...form.hobbies, ''] });
  };

  // Remove a specific hobby input field
  const removeHobby = (index) => {
    const updatedHobbies = form.hobbies.filter((_, i) => i !== index);
    setForm({ ...form, hobbies: updatedHobbies });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleInputChange}
          required
        />
        <h3>Hobbies:</h3>
        {form.hobbies.map((hobby, index) => (
          <div key={index} className="dynamic-field">
            <input
              type="text"
              value={hobby}
              placeholder={`Hobby ${index + 1}`}
              onChange={(e) => handleHobbyChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeHobby(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addHobby}>
          Add Hobby
        </button>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

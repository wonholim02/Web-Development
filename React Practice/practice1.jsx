import React, { useState } from 'react';
import './SampleForm.css';

function SampleForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SampleForm;

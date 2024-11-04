import React, { useState } from 'react';

const AddHogForm = ({ onAddHog }) => {
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    greased: false,
    weight: '',
    "highest medal achieved": '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHog({ ...newHog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(newHog);
    setNewHog({ name: '', specialty: '', greased: false, weight: '', "highest medal achieved": '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Hog</h3>
      <input name="name" placeholder="Name" value={newHog.name} onChange={handleChange} required />
      <input name="specialty" placeholder="Specialty" value={newHog.specialty} onChange={handleChange} required />
      <input type="checkbox" name="greased" checked={newHog.greased} onChange={() => setNewHog({ ...newHog, greased: !newHog.greased })} />
      <label>Greased</label>
      <input name="weight" placeholder="Weight" value={newHog.weight} onChange={handleChange} required />
      <input name="highest medal achieved" placeholder="Highest Medal" value={newHog["highest medal achieved"]} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={newHog.image} onChange={handleChange} required />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default AddHogForm;

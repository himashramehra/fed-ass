import React, { useState } from "react";

const RecipeForm = ({ refresh }) => {
  const [form, setForm] = useState({ title: "", ingredients: "", instructions: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", ingredients: "", instructions: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients" required />
      <textarea name="instructions" value={form.instructions} onChange={handleChange} placeholder="Instructions" required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css"; // reuse styling

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recipes")
      .then((res) => {
        setRecipes(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (!recipes.length) {
    return <p>No recipes yet — add one using the “Add Recipe” tab!</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="recipe-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/562/562678.png"
            alt="Recipe"
          />
          <h3>{recipe.title}</h3>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

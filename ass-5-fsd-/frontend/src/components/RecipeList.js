import React from "react";
import "./Dashboard.css"; // reuse styling

const RecipeList = ({ recipes = [], onDelete }) => {

  if (!recipes.length) {
    return <p>No recipes yet — add one using the “Add Recipe” tab!</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
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
          {typeof onDelete === "function" && (
            <button className="tab-btn" onClick={() => onDelete(recipe.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
